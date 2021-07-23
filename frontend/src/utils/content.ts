// Content acquisition helper APIs for retrieving Markdown text from various
// sources. The helpers here wrap various fallbacks and different extensions
// and list files/locales.
import { statSync, readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import getConfig from "next/config";
import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants";
import glob from "glob";
import { flow, map, join as ldjoin, filter } from "lodash/fp";

import { RawContent } from "src/types/content";

// relative to the `frontend/` directory, the app's working directory.
const CONTENT_PATH = "content";

// Gets a list of all content. English is the default and all other languages
// will be a subset of the English content so it's essentially the master copy.
// Because of this, the "en" directory is where to source the list of content.
//
// It returns essentially a matrix of all combinations of all locales and all
// content pages. The result is a flattened list.
export const getContentPaths = (subdir: string = ""): string[] => {
  const contents = getContentPathsForLocale(subdir);
  return getAllContentLocales()
    .map((locale: string) => contents.map((content) => `/${locale}${content}`))
    .flat();
};

// Gets a list of all content for a specific language
export const getContentPathsForLocale = (
  subdir: string = "",
  locale: string = "en"
) =>
  glob
    .sync(join(CONTENT_PATH, locale, subdir, "**", "*.mdx"))
    .map(
      (path: string) =>
        path.substring(
          ("content/" + locale).length, // strip off "content/en/"
          path.indexOf(".mdx") // strip off ".mdx"
        ) // result: only the path bit, relative to locale directory without ext
    )
    .filter((path: string) => path !== "/index"); // ignore index page, this is automatic

// Get all possible locales by simply listing the content directory. Each
// subdirectory in here is a locale. There should be no other files or
// directories in here.
export const getAllContentLocales = () =>
  readdirSync(CONTENT_PATH).filter((path: string) => !path.startsWith(".")); // ignore dotfiles

// A helper for checking if a file exists because it's easier than exceptions.
export const exists = (path: string): boolean => {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
};

// Reads a markdown content file from the local filesystem. Only works at build
// time. Will not work in production on Vercel at request-time.
export const readMdFromLocal = async (
  path: string
): Promise<string | undefined> => {
  const path_mdx = path + ".mdx";
  const path_md = path + ".md";

  if (exists(path_mdx)) {
    return readFileSync(path_mdx).toString();
  }

  if (exists(path_md)) {
    return readFileSync(path_md).toString();
  }

  return undefined;
};

// Reads a markdown content file from the API. This is suitable for runtime use
// and is used to build docs pages at request-time.
export const readMdFromAPI = async (
  path: string
): Promise<string | undefined> => {
  const path_mdx = path + ".mdx";
  const path_md = path + ".md";

  let response: string | undefined;

  // TODO: Perform the md/mdx differentiation on the API, instead of here.

  response = await rawAPI(path_md);
  if (response) {
    return response;
  }

  response = await rawAPI(path_mdx);
  if (response) {
    return response;
  }

  return undefined;
};

// Fetches content directly from GitHub's raw content CDN.
const rawAPI = async (path: string): Promise<string | undefined> => {
  const response = await fetch("https://api.open.mp/docs/" + path);
  if (response.status === 200) {
    return await response.text();
  }
  return undefined;
};

// Reads "content" (not docs) based on the given name and locale. It first
// attempts the given locale and if that isn't found, it attempts the "en"
// version. If the English version is used as a fallback, `fallback` is `true`.
export const readLocaleContent = async (
  name: string,
  locale: string
): Promise<RawContent> => {
  let source = await readMdFromLocal(resolve("content", locale, name));
  if (source !== undefined) {
    return { source, fallback: false };
  }

  source = await readMdFromLocal(resolve("content", "en", name));
  if (source !== undefined) {
    return { source, fallback: true };
  }

  throw new Error(`Not found (${name} - ${locale})`);
};

const readLocaleDocsDevMode = async (
  name: string,
  locale?: string
): Promise<RawContent> => {
  // The path may not be a file, it may be a directory. If so, generate a page
  // for this directory that lists all its children as well as any content in
  // a special file named `_.md`.
  const dir = "../docs/" + name;
  if (exists(dir) && statSync(dir).isDirectory()) {
    const list = readdirSync(dir);

    // Attempt to read a file named _.md from the directory
    let source = await readMdFromLocal(dir + "/_");
    if (source === undefined) {
      source = "# " + name + "\n\n";
    }

    // Generate some content for this category page. A heading, some content
    // from the index.md if it exists and a list of pages inside it.
    const additional = flow(
      filter((v: string) => v !== "_.md"), // filter out the special index page
      map((v: string) => v.replace(".md", "")), // remove the file extension
      map((v: string) => `- [${v}](${"/docs/" + name + "/" + v})`), // generate a ul element
      ldjoin("\n")
    )(list);

    return {
      source: source + additional,
      fallback: false,
    };
  }

  if (name === "") {
    name = "index";
  }

  //
  // Local Filesystem Docs Content
  //

  let withLocale = "../docs/" + name;
  if (locale && locale != "en") {
    withLocale = `../docs/translations/${locale}/${name}`;
  }

  let source = await readMdFromLocal(withLocale);
  if (source !== undefined) {
    return { source, fallback: false };
  }

  const fallbackPath = "../docs/" + name;
  source = await readMdFromLocal(fallbackPath);
  if (source !== undefined) {
    return { source, fallback: true };
  }

  throw new Error(`Not found locally (${name}) check ../docs for the file.`);
};

// Reads docs with the given name and locale. Attempts the locale version first
// (if not English) and falls back to the English if not found.
export const readLocaleDocs = async (
  name: string,
  locale?: string
): Promise<RawContent> => {
  // If dev mode (`npm run dev`) or a production build (`npm run build`) and the
  // then site is not on Vercel, read docs from the local filesystem.
  const { serverRuntimeConfig } = getConfig();
  if (
    (serverRuntimeConfig.phase === PHASE_DEVELOPMENT_SERVER ||
      serverRuntimeConfig.phase === PHASE_PRODUCTION_BUILD) &&
    process.env.VERCEL !== "1"
  ) {
    // If you want to simulate how the production site fetches content, comment
    // out the line below so local files aren't used to render docs pages.
    return await readLocaleDocsDevMode(name, locale);
  }

  // Otherwise, this is being run in production and is happening at request-time
  // so use the API to get the content.

  // Only attempt to find translated copies on the API. These aren't built
  // statically at build-time because the traffic is lower than the English
  // (default) pages so it's fine to sacrifice a bit of performance here.
  let withLocale = name;
  if (locale && locale != "en") {
    withLocale = `translations/${locale}/${name}`;
  }
  let source = await readMdFromAPI(withLocale);
  if (source !== undefined) {
    return { source, fallback: false };
  }

  //Next, try the English version as a fallback.
  source = await readMdFromAPI(name);
  if (source !== undefined) {
    return { source, fallback: true };
  }

  // Finally, try the API for the directory listing or the raw file. This is
  // usually hit for when a category page is request for a non-en locale.
  // In dev mode, this is never hit because the local files are found but in
  // prod, those local files aren't available.

  source = await rawAPI(name);
  if (source !== undefined) {
    // Little hack because of how the API server's filesystem router works. If
    // you hit a directory, it gives you a <pre> list of <a> tags linking to
    // the pages. So we want to remove the tags and the `.md` extensions.
    if (source.startsWith("<pre>")) {
      source = source
        .replace("<pre>", "<ul>") // unordered list
        .replace("</pre>", "</ul>")
        .replace(/<a href="/g, `<li><a href="/docs/${name}/`) // turn links into list items
        .replace(/<\/a>/g, "</a></li>")
        .replace(/.md/g, ""); // remove file extensions
    }
    return { source, fallback: true };
  }

  throw new Error(`Not found (${name})`);
};

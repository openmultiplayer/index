import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import components from "src/components/templates";

// -
// Client side
// -

import { hydrate } from "src/mdx-helpers/csr";
import { DocsSidebar } from "src/components/Sidebar";
import Admonition from "src/components/Admonition";

type Props = {
  source?: any;
  error?: string;
  data?: { [key: string]: any };
  fallback?: boolean;
};

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  // hydrate contains hook calls, and hooks must always be called
  // unconditionally. Because they are called from a regular function here and
  // not a nested component, the unconditionality applies to the call stack of
  // *this* component, so the content must be hydrated regardless of whether or
  // not there was an error in the following if-statement.
  const content =
    props.source &&
    hydrate(props.source, { components: components as Components });

  if (props.error) {
    return (
      <section className="mw7 pa3 measure-wide center">
        <h1>Error!</h1>
        <p>{props.error}</p>
      </section>
    );
  }

  return (
    <div className="flex flex-column flex-auto items-stretch">
      <NextSeo
        title={props?.data?.title}
        description={props?.data?.description}
      />

      <div className="flex flex-column flex-row-ns justify-center-ns">
        <div className="flex flex-column flex-grow">
          <Search />
          {isMounted && <DocsSidebar />}
        </div>

        <section className="mw7 pa3 flex-auto">
          {props.fallback && (
            <Admonition type="warning" title="Not Translated">
              <p>
                This page has not been translated into the language that your
                browser requested. The English content is being shown as a
                fallback.
              </p>
              <p>
                If you want to contribute a translation for this page then
                please click{" "}
                <a href="https://github.com/openmultiplayer/web">here</a>.
              </p>
            </Admonition>
          )}
          <h1>{props?.data?.title}</h1>
          {content}
        </section>
        <nav>{/* TODO: Table of contents */}</nav>
      </div>
    </div>
  );
};

// -
// Server side
// -

import { extname } from "path";
import { readdirSync, statSync } from "fs";
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import matter from "gray-matter";
import glob from "glob";
import admonitions from "remark-admonitions";
import { concat, filter, flatten, flow, map } from "lodash/fp";
import { Components } from "@mdx-js/react";

import { renderToString } from "src/mdx-helpers/ssr";
import { readLocaleDocs } from "src/utils/content";
import Search from "src/components/Search";

export async function getStaticProps(
  context: GetStaticPropsContext<{ path: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  const { locale } = context;
  const route = context?.params?.path || ["index"];

  let result: { source: string; fallback: boolean };
  const path = route.join("/");
  try {
    result = await readLocaleDocs(path, locale);
  } catch (e) {
    return {
      props: { error: `File ${path} (${locale}) not found: ${e.message}` },
    };
  }

  const { content, data } = matter(result.source);

  // TODO: plugins for admonitions and frontmatter etc
  // also, pawn syntax highlighting
  const mdxSource = await renderToString(content, {
    components: components as Components,
    mdxOptions: { remarkPlugins: [admonitions] },
  });

  return {
    props: {
      source: mdxSource,
      data,
      fallback: result.fallback,
    },
  };
}

export async function getStaticPaths(
  ctx: GetStaticPathsContext
): Promise<GetStaticPathsResult> {
  type P = { path: string[] };
  type Path = { params: P; locale?: string };

  // read docs from the repo root
  const all = glob.sync("../docs/**/*.md");

  // Function to get the directory tree as a list of paths. This is recursive.
  const walk = (root: string): string[] =>
    flow(
      // Prefix the directory item name with the root directory path
      map((path: string) => root + "/" + path),

      // Filter out non-directories.
      filter((path: string) => statSync(path).isDirectory()),

      // Mix in the paths being iterated with their children, the pipeline is
      // now dealing with string[][]
      map((path: string) => concat(path)(walk(path))),

      // Flatten string[][] back to string[] for yielding
      flatten
    )(readdirSync(root));

  const paths: Array<Path> = flow(
    // Mix in the flat list of directories from the above recursive function
    concat(walk("../docs")),

    // Filter out translations directory - these are handled separately
    // NOTE: Currently this is not the case, these are built statically too.
    // filter((v: string) => v.indexOf("translations") === -1),

    // Filter out category content pages
    filter((v: string) => !v.endsWith("_.md")),

    // Chop off the `../docs/` base path
    map((v: string) => v.replace("../docs/", "")),

    // Chop off the file extension
    map((v: string) => v.slice(0, v.length - extname(v).length)),

    // slices off "index" from pages so they lead to the base path
    map((v: string) => (v.endsWith("index") ? v.slice(0, v.length - 5) : v)),

    // Add the docs base path (open.mp/docs)
    concat([""]),

    // Transform the paths into Path objects for "en" locale
    map((v: string) => ({
      params: {
        path: v.split("/"),
      },
      locale: "en",
    }))
  )(all);

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default Page;

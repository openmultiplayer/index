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

  if (props.error) {
    return (
      <section>
        <h1>Error!</h1>
        <p>{props.error}</p>
      </section>
    );
  }

  const content =
    props.source &&
    hydrate(props.source, { components: components as Components });

  return (
    <div className="flex flex-column flex-auto items-center">
      <NextSeo
        title={props?.data?.title}
        description={props?.data?.description}
      />

      <div className="flex flex-row-ns justify-center-ns">
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
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import matter from "gray-matter";
import glob from "glob";
import admonitions from "remark-admonitions";

import { renderToString } from "src/mdx-helpers/ssr";
import { readLocaleDocs } from "src/utils/content";
import Search from "src/components/Search";
import { concat } from "lodash/fp";
import { Components } from "@mdx-js/react";

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

export async function getStaticPaths() {
  const paths = concat(["/docs/"])(
    glob
      .sync("../docs/**/*.md") // read docs from the repo root
      // .filter((v: string) => statSync(v).size > 60000) // only build large pages
      .map((v: string) => "/" + v.slice(3, v.length - extname(v).length))
      .map((v: string) => (v.endsWith("index") ? v.slice(0, v.length - 5) : v))
  );

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default Page;

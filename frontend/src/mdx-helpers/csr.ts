import React from "react";
import { mdx, MDXProvider } from "@mdx-js/react";
import { useEffect } from "react";

import { MDX_COMPONENTS } from "./components";
import { MarkdownContent, MarkdownRenderConfig } from "./types";
import "./idle-callback-polyfill";

// Renders markdown content on the client side using the props passed to the
// page component from `markdownSSR`.
export const markdownCSR = (content: MarkdownContent): JSX.Element =>
  hydrate(content, {
    components: MDX_COMPONENTS,
  });

// Stolen from Hashicorp's next-mdx-remote!
export const hydrate = (
  { compiledSource, renderedOutput, scope }: MarkdownContent,
  { components }: MarkdownRenderConfig
): JSX.Element => {
  // our default result is the server-rendered output
  // we get this in front of users as quickly as possible
  const [result, setResult] = React.useState<JSX.Element>(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: renderedOutput,
      },
    })
  );

  // if we're on the client side, we hydrate the mdx content inside
  // requestIdleCallback, since we can be fairly confident that
  // markdown - embedded components are not a high priority to get
  // to interactive compared to...anything else on the page.
  //
  // once the hydration is complete, we update the state/memo value and
  // react re-renders for us
  useEffect(() => {
    const handle = window.requestIdleCallback(() => {
      // first we set up the scope which has to include the mdx custom
      // create element function as well as any components we're using
      const fullScope = { mdx, ...components, ...scope };
      const keys = Object.keys(fullScope);
      const values = Object.values(fullScope);

      // now we eval the source code using a function constructor
      // in order for this to work we need to have React, the mdx createElement,
      // and all our components in scope for the function, which is the case here
      // we pass the names (via keys) in as the function's args, and execute the
      // function with the actual values.
      const hydratedFn = new Function(
        "React",
        ...keys,
        `${compiledSource}
      return React.createElement(MDXContent, {  });`
      )(React, ...values);

      // wrapping the content with MDXProvider will allow us to customize the standard
      // markdown components (such as "h1" or "a") with the "components" object
      const wrappedWithMdxProvider = React.createElement(
        MDXProvider,
        { components },
        hydratedFn
      );

      // finally, set the the output as the new result so that react will re-render for us
      // and cancel the idle callback since we don't need it anymore
      setResult(wrappedWithMdxProvider);
      window.cancelIdleCallback(handle);
    });
  }, [compiledSource]);

  // if we're server-side, we can return the raw output early
  if (typeof window === "undefined") {
    return result;
  }

  return result;
};

//                                                                            //
//                                           #@@@@@@@@@/                      //
//                                      (@@%%%%%%%%%%%%%%&@%                  //
//                                   %@%%%%%%%%%%%%%%%%%%%%%&@(               //
//                                 (@%%%%%%%%%%%%%%%%%%%%%%%%%%@(             //
//                               %@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%            //
//                              %&%%%%%%%%%%%%%%%%%%&@@%%%%%%%%%%&@#          //
//                            .@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///*/@@/     //
//                            @%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#///////*#@.  //
//                           @&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%////*/&@@,   //
//                          (@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(#@%/        //
//                          &%%%%%%%%%%%%%%%%%%%%%%%%%&@@@@&(/.  &(           //
//                         *&%%%%%%%%%%%%%%%%%%%%%%@%           ,@            //
//                        .@&%%%%%%%%%%%%%%%%%%%%@,             @.            //
//                        @@%%%%%%%%%%%%%%%%%%%&#              (&             //
//                       .@%%%%%%%%%%%%%%%%%%%&#               @%             //
//                       &&%%%%%%%%%%%%%%%%%%@#               .@(             //
//                      @@%%%%%%%%%%%%%%%%%%&#                *@,             //
//                     #@%%%%%%%%%%%%%%%%%%&@,                /@              //
//                    ,@%%%%%%%%%%%%%%%%%%%@#                 (@              //
//                   ,@%%%%%%%%%%%%%%%%%%%&#                  (&              //
//                   @&%%%%%%%%%%%%%%%%%%%%                   (@              //
//                  &%%%%%%%%%%%%%%%%%%%%%%%                  *@.             //
//                 @@%%%%%%%%%%%%%%%%%%%%%%@.                 ,@*             //
//                #&%%%%%%%%%%%%%%%%%%%%%%%@(                 .@(             //
//               (@%%%%%%%%%%%%%%%%%%%%%%%%@(.                 @#             //
//              #@%%%%%%%%%%%%%%%%%%%%%%%%%@/..                @%             //
//             ,@%%%%%%%%%%%%%&%%%%%%%%%%%%@..                 @%             //
//            (@%%%%%%%%%%%%%%&@%%%%%%%%%%@/ .                .@(             //
//           (@%%%%%%%%%%%%%%%%&@%%%%%%%%&@ .                 ,@*             //
//          /@%%%%%%%%%%%%%%%%%%%@&%%%%%%@/..                 (@              //
//         /@%%%%%%%%%%%%%%%%%%@,.@&%%%%@,.                   #(              //
//        .@%%%%%%%%%%%%%%%%%%@  . #@%@@..                    @*              //
//        @%%%%%%%%%%%%%%%%%&@,    .. ..                     (#               //
//       @&%%%%%%%%%%%%%%%%%#                               /@.               //
//     .@&%%%%%%%%%%%%%%%%@&                                &/                //
//   (@&%%%%%%%%%%%%%%%%%@                                 @,                 //
// /@%%%%%%%%%%%%%%%%%%&*                                *@*                  //
// /@%%%%%%%%%%%%%%&@.                                  %#                    //
//    #%@&%%%%%%@%.                                   ,@*                     //
//         ,&@&                                     /@#//&@/                  //
//              *#&@(*,                        .*#&%/////(##@/                //
//        ........... @(*#&@@@@@@(/////#@@@@&@* ..,*/#%@@@%.,,,.              //
//        .............%&#(/////////////////(##&&.,,,.,,.,...                 //
//                     .,.. ,(&@@%/*,#@@@@@@@,,,,,.                           //
//                           ..........,,,.,...                               //
//                                                                            //
//                              For Edmund.                                   //
//                              2021-04-11                                    //
//                                                                            //

import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-nextjs-toast";
import NProgress from "nprogress";

import Nav from "src/components/Nav";
import Footer from "src/components/Footer";

import "normalize.css";
import "tachyons/css/tachyons.min.css";
import "nprogress/nprogress.css";
import "remark-admonitions/styles/classic.css";

import "src/styles/base.css";
import { AuthProvider } from "src/auth/hooks";
import React from "react";

// Trigger client-side progress bar for client-side page transitions.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <link rel="stylesheet" href="/fonts.css" />

      <div
        dangerouslySetInnerHTML={{
          __html: `<!--
//                                                                            //
//                                           #@@@@@@@@@/                      //
//                                      (@@%%%%%%%%%%%%%%&@%                  //
//                                   %@%%%%%%%%%%%%%%%%%%%%%&@(               //
//                                 (@%%%%%%%%%%%%%%%%%%%%%%%%%%@(             //
//                               %@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%            //
//                              %&%%%%%%%%%%%%%%%%%%&@@%%%%%%%%%%&@#          //
//                            .@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///*/@@/     //
//                            @%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#///////*#@.  //
//                           @&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%////*/&@@,   //
//                          (@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(#@%/        //
//                          &%%%%%%%%%%%%%%%%%%%%%%%%%&@@@@&(/.  &(           //
//                         *&%%%%%%%%%%%%%%%%%%%%%%@%           ,@            //
//                        .@&%%%%%%%%%%%%%%%%%%%%@,             @.            //
//                        @@%%%%%%%%%%%%%%%%%%%&#              (&             //
//                       .@%%%%%%%%%%%%%%%%%%%&#               @%             //
//                       &&%%%%%%%%%%%%%%%%%%@#               .@(             //
//                      @@%%%%%%%%%%%%%%%%%%&#                *@,             //
//                     #@%%%%%%%%%%%%%%%%%%&@,                /@              //
//                    ,@%%%%%%%%%%%%%%%%%%%@#                 (@              //
//                   ,@%%%%%%%%%%%%%%%%%%%&#                  (&              //
//                   @&%%%%%%%%%%%%%%%%%%%%                   (@              //
//                  &%%%%%%%%%%%%%%%%%%%%%%%                  *@.             //
//                 @@%%%%%%%%%%%%%%%%%%%%%%@.                 ,@*             //
//                #&%%%%%%%%%%%%%%%%%%%%%%%@(                 .@(             //
//               (@%%%%%%%%%%%%%%%%%%%%%%%%@(.                 @#             //
//              #@%%%%%%%%%%%%%%%%%%%%%%%%%@/..                @%             //
//             ,@%%%%%%%%%%%%%&%%%%%%%%%%%%@..                 @%             //
//            (@%%%%%%%%%%%%%%&@%%%%%%%%%%@/ .                .@(             //
//           (@%%%%%%%%%%%%%%%%&@%%%%%%%%&@ .                 ,@*             //
//          /@%%%%%%%%%%%%%%%%%%%@&%%%%%%@/..                 (@              //
//         /@%%%%%%%%%%%%%%%%%%@,.@&%%%%@,.                   #(              //
//        .@%%%%%%%%%%%%%%%%%%@  . #@%@@..                    @*              //
//        @%%%%%%%%%%%%%%%%%&@,    .. ..                     (#               //
//       @&%%%%%%%%%%%%%%%%%#                               /@.               //
//     .@&%%%%%%%%%%%%%%%%@&                                &/                //
//   (@&%%%%%%%%%%%%%%%%%@                                 @,                 //
// /@%%%%%%%%%%%%%%%%%%&*                                *@*                  //
// /@%%%%%%%%%%%%%%&@.                                  %#                    //
//    #%@&%%%%%%@%.                                   ,@*                     //
//         ,&@&                                     /@#//&@/                  //
//              *#&@(*,                        .*#&%/////(##@/                //
//        ........... @(*#&@@@@@@(/////#@@@@&@* ..,*/#%@@@%.,,,.              //
//        .............%&#(/////////////////(##&&.,,,.,,.,...                 //
//                     .,.. ,(&@@%/*,#@@@@@@@,,,,,.                           //
//                           ..........,,,.,...                               //
//                                                                            //
//                              For Edmund.                                   //
//                              2021-04-11                                    //
//                                                                            //
-->
`,
        }}
      ></div>
    </Head>

    {/* 
      Sets the default meta tags for all pages.
      https://github.com/garmeeh/next-seo
    */}
    <DefaultSeo
      title="Open Multiplayer"
      titleTemplate="open.mp | %s"
      description="An upcoming multiplayer mod for Grand Theft Auto: San Andreas that will be fully backwards compatible with the existing multiplayer mod San Andreas Multiplayer."
      canonical="https://www.open.mp"
      twitter={{
        cardType: "summary",
        site: "@openmultiplayer",
        handle: "@openmultiplayer",
      }}
    />

    {/* Toast notification positioning container */}
    <ToastContainer align="right" />

    {/* This is flex to make <section> elements gapless */}
    <div id="container">
      {/* Provides authentication context for child components */}
      <AuthProvider>
        <Nav
          items={[
            { name: "Home", path: "/", exact: true },
            { name: "FAQ", path: "/faq" },
            { name: "Servers", path: "/servers" },
            { name: "Docs", path: "/docs" },
            { name: "Blog", path: "/blog" },
          ]}
          route={router.pathname}
        />

        <main>
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </div>

    <Footer />

    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      #container {
        flex: 1 0 auto;
      }
    `}</style>
  </>
);

export default App;

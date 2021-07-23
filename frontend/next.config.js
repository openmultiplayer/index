const fs = require("fs");
const path = require("path");

const parseDir = require("./scripts/gentree");
const generateCache = require("./scripts/gencache");

generateCache();

module.exports = (phase) => {
  console.log("Phase:", phase);
  return {
    serverRuntimeConfig: { phase },
    env: {
      tree: parseDir("../docs"),
    },
    i18n: {
      locales: fs
        .readdirSync("content")
        .filter((v) => fs.statSync(path.join("content", v)).isDirectory()),
      defaultLocale: "en",
    },
    images: {
      domains: ["assets.open.mp"],
    },
    // prettier-ignore
    redirects: [
      { source: "/about", destination: "/", permanent: true },
      { source: "/forum", destination: "https://burgershot.gg", permanent: true},
      { source: "/wiki", destination: "https://open.mp/docs ", permanent: true},
      { source: "/links", destination: "https://linktr.ee/openmultiplayer", permanent: true},
      { source: "/videos", destination: "https://youtube.com/openmultiplayer", permanent: true},
      { source: "/youtube", destination: "https://youtube.com/openmultiplayer", permanent: true},
      { source: "/live", destination: "https://twitch.tv/openmultiplayer", permanent: true},
      { source: "/twitch", destination: "https://twitch.tv/openmultiplayer", permanent: true},
      { source: "/stream", destination: "https://twitch.tv/openmultiplayer", permanent: true},
      { source: "/twitter", destination: "https://twitter.com/openmultiplayer", permanent: true},
      { source: "/instagram", destination: "https://instagram.com/openmultiplayer", permanent: true},
    ],
  };
};

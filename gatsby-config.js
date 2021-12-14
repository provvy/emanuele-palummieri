module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Emanuele Palummieri Fotografo",
    author: "Paolo Provveduto",
    description:
      "Emanuele Palummieri, fotografo paesaggista, sa cogliere con i suoi scatti le più variegate sfumature e sfaccettature della natura che lo circonda.",
    keywords:
      "Emanuele Palummieri, fotografo, salento, natura, mare, spiaggia, puglia",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cinzel\:400`,
          `source sans pro\:300,400,400i,500,700`,
          `Crimson Pro\:300,400,500`,
        ],
        display: "swap",
      },
    },
  ],
};

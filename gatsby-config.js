module.exports = {
  siteMetadata: {
    siteUrl: "https://emanuelepalummieri.it",
    title: "Emanuele Palummieri Fotografo",
    author: "Paolo Provveduto",
    description:
      "Emanuele Palummieri, fotografo paesaggista e naturalista, riesce a cogliere con i suoi scatti le più raffinate sfumature della realtà che lo circonda.",
    keywords:
      "Emanuele, Palummieri, fotografo, salento, natura, paesaggi, mare, spiaggia, puglia",
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};

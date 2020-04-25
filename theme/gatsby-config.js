module.exports = options => ({
  siteMetadata: {
    title: options.siteTitle || "Gatsby Theme",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content/frontpage/about",
        name: "content/frontpage/about",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.portfolioContentPath || "content/portfolio",
        name: options.portFolioContentPath || "content/portfolio",
      },
    },
    "gatsby-transformer-yaml"
  ],
})

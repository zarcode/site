module.exports = options => ({
  siteMetadata: {
    title: options.siteTitle || "Gatsby Theme",
    description: options.siteDesc || "",
    siteUrl: options.siteUrl || `https://zarcode.io`,
    social: [
      {
        url: `https://twitter.com/zarkoden`,
        name: "Zarko Dencic"
      }
    ]
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
        path: "content/portfolio",
        name: "content/portfolio",
      },
    },
    "gatsby-transformer-yaml"
  ],
})

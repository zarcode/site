module.exports = options => ({
  siteMetadata: {
    title: options.siteTitle || "Gatsby Theme",
    description: options.siteDesc || "",
    siteUrl: options.siteUrl || `https://zarcode.io`,
    social: [
      {
        url: `https://twitter.com/zarkoden`,
        name: "Zarko Dencic",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    "gatsby-image",
    "gatsby-plugin-sharp",
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
    "gatsby-transformer-yaml",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Quattrocento",
              variants: ["400"],
              // strategy: 'selfHosted'
            },
          ],
        },
      },
    },
  ],
})

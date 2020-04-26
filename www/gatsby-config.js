/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-dencic",
      options: {
        siteTitle: "Web and Mobile Developer",
        siteDesc: "",
        portfolioBasePath: "/portfolio", // default: /portfolio
      }
    }
  ]
}

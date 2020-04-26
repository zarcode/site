const fs = require("fs")
const mkdirp = require("mkdirp")

const { createPortfolioType } = require("./utils/types")

// Ensure that content directories exist
exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const dirs = [
    "content/frontpage/about",
    "content/portfolio",
    // themeOptions.portfolioContentPath || "content/portfolio"
  ]

  dirs.forEach(dir => {
    reporter.info(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
  // createTypes([
  //   createPortfolioType(schema),
  // ])
  createTypes(`
    type Portfolio implements Node @dontInfer {
      id: ID!,
      title: String!
      slug: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/"

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")

    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
  }

  createResolvers({
    Portfolio: {
      slug: {
        resolve: source => slugify(source.name),
      },
    },
  })
}

exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!")

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/frontpage.js"),
    context: {
      heading: "Your Theme Here",
      content: `
        <p>
          Use this handy theme example as the basis for your own amazing theme!
        </p>
        <p>
          For more information, see 
          <a href="https://themejam.gatsbyjs.org">themejam.gatsbyjs.org</a>.
        </p>
      `,
    },
  })
}

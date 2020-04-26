// const mdxResolverPassthrough = require("../mdxResolverPassthrough")

const createPortfolioType = schema => {
  return schema.buildObjectType({
    name: `Portfolio`,
    fields: {
      id: { type: `ID!` },
      title: { type: `String!` },
      slug: { type: `String!` },
      publishedDate: { type: `Date!`, extensions: { dateformat: {} } },
    },
    interfaces: [`Node`],
  })
}

module.exports = createPortfolioType

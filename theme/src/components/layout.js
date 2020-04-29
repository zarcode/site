import React from "react"
import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { Layout as StyledLayout, ThemeProvider } from "theme-ui"
import theme from "gatsby-plugin-theme-ui"

import SEO from "./SEO"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <SEO />

        {children}
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout

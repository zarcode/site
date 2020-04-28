import React from "react"
import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  ThemeProvider,
} from "theme-ui"
import AnchorLink from "react-anchor-link-smooth-scroll"
import theme from "gatsby-plugin-theme-ui"

import SEO from "./SEO"
// import Link from "@components/Link"
import Box from "./box"
import Flex from "./flex"

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
        <Header>
          <Flex>
            <Box>
              <nav>
                <AnchorLink href="#projects">Projects</AnchorLink>
                <AnchorLink href="#contact">Contact</AnchorLink>
              </nav>
            </Box>
            <Box></Box>
          </Flex>
          {/* <span>{data.site.siteMetadata.title}</span> */}
        </Header>
        <Main>
          <Container>{children}</Container>
        </Main>
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout

/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import React from "react"
import { Styled, Main, Container } from "theme-ui"
import Layout from "../components/layout"
import Box from "../components/box"
import Content from "../components/content"
import MainNav from "../components/mainNav"
import Flex from "../components/flex"
import Subtitle from "../components/subtitle"
import cover from "../images/cover.png"

const HeaderWrap = styled.div`
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-position: right top;
  max-width: 1800px;
  width: 100%;
  margin: 50px auto 0;
  height: 100%;
`

const PageTemplate = ({ pageContext }) => (
  <Layout>
    {/* <div>
      <div css={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        flex: 1
      }}>
        <Box>
        </Box>
        <Box>
          <HeaderWrap/>
      
        </Box>
  
      </div> */}
    <HeaderWrap>
      <MainNav>
        {/* <span>{data.site.siteMetadata.title}</span> */}
        <section>
          <Flex>
            <Box
              css={{
                paddingTop: "170px",
              }}
            >
              <Subtitle>Hello</Subtitle>

              <Styled.h2
                sx={{
                  variant: "h2.likeH1",
                  margin: 0,
                }}
              >
                Zarko Dencic
              </Styled.h2>
              <Styled.h1 css={{ margin: 0 }}>
                Web and Mobile Developer
              </Styled.h1>
              <Content>
                I’m an enthusiastic product designer currently working on making
                the future be NO-CODE at Webflow, while traveling around the
                world. You can find my recent projects on Dribbble and Behance
                or if you're interested in my UI Kits visit my store.
              </Content>
            </Box>
            <Box></Box>
          </Flex>
        </section>
      </MainNav>
    </HeaderWrap>

    <Main></Main>
    {/* <Styled.h1>{pageContext.heading}</Styled.h1> */}
    {/* <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
  </Layout>
)

export default PageTemplate

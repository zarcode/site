/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import Box from "../components/box"
import Flex from "../components/flex"
import Subtitle from "../components/subtitle"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <section>
      <Flex>
        <Box
          css={{
            paddingTop: "170px",
          }}
        >
          <Subtitle>
            Hello
          </Subtitle>

          <Styled.h2
            sx={{
              variant: 'h2.likeH1',
              margin: 0
            }}
          >
            Zarko Dencic
          </Styled.h2>
          <Styled.h1 css={{ margin: 0 }}>Web and Mobile Developer</Styled.h1> 

        </Box>
        <Box></Box>
      </Flex>
    </section>
    {/* <Styled.h1>{pageContext.heading}</Styled.h1> */}
    {/* <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
  </Layout>
)

export default PageTemplate

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
        </Box>
        <Box></Box>
      </Flex>
    </section>
    {/* <Styled.h1>{pageContext.heading}</Styled.h1> */}
    {/* <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
  </Layout>
)

export default PageTemplate

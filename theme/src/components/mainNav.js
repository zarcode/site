import React from "react"
import { Header } from "theme-ui"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Box from "../components/box"
import Flex from "../components/flex"

const MainNav = ({ children }) => (
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
    {children}
  </Header>
)

export default MainNav

import * as React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import { Nav } from "../components/nav"
import { Phone } from "./phone"
import Footer from "../components/footer"
import styled from "styled-components"

const StyledContent = styled.div``

const Layout = ({ children }) => {
  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav />
          <StyledContent id="content">{children}</StyledContent>
          <Phone />
          <Footer />
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

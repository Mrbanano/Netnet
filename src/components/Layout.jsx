
import React from "react"
import { createGlobalStyle } from "styled-components"
import Navbar from "./Navbar"
import Menu from "./Menu"

const GlobalStyle = createGlobalStyle`
  body {
    min-inline-size: 240px;
    margin: 0;
    padding: 0;
  }
`


const Layout = props => {
  return (
    <>
    <GlobalStyle />
      <Menu></Menu>
        <main>{props.children}</main>
      <Navbar></Navbar>
    </>
  )
}

export default Layout








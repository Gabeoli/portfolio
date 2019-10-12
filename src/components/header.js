import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MenuBtn from "./menu/MenuBtn"

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="logo">Gabriel Dean Olivar</h1>
    <MenuBtn/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

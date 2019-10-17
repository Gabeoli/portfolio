import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../images/my_logo.svg"
import ConditionalMenu from "./menu/ConditionalMenu"
const Header = ({ siteTitle }) => (
  <header>
    <Link to="#" id="home-link"><img src={Logo} alt="GDO" className="logo"/></Link>
    <ConditionalMenu/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header

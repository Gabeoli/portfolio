import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"
import PageTransition from "./PageTransition"
import FadeIn from "./FadeIn"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="page">
      {/* <PageTransition/> */}
        {/* <FadeIn> */}
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="container" id="container">
              {children}
            </div>
            <Footer/>
        {/* </FadeIn> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

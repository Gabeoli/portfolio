import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-page">
          <div className="text-holder">
            <h1>Always looking for new opportunites. Get at me.</h1>
            <a href="mailto:me@gabrieldeanolivar.com">
              me@gabrieldeanolivar.com
            </a>
            <p>(Doughnut sponsorships welcome)</p>
          </div>
    </div>
  </Layout>
)

export default ContactPage

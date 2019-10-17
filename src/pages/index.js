import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Sections
import HeroSection from "../components/home_sections/HeroSection"
import ProjectSection from "../components/home_sections/ProjectsSection"
import ContactSection from "../components/home_sections/ContactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <HeroSection/>
    <ProjectSection/>
    <ContactSection/>
  </Layout>
)

export default IndexPage

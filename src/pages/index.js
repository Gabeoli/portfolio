import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Sections
import HeroSection from "../components/home_sections/HeroSection"
import ProjectSection from "../components/home_sections/ProjectsSection"
import ContactSection from "../components/home_sections/ContactSection"
import HomeLoad from "../components/HomeLoad"
import PageTransition from "../components/PageTransition"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="home-page">
    {/* <HomeLoad/> */}
    {/* <PageTransition/> */}
      <HeroSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  </Layout>
)

export default IndexPage

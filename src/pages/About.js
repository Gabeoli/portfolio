import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div id="about-page">
      <div className="hero-section">
        <div className="header-text">
          <h1>My name is Gabriel, I'm a digital designer based in London. </h1>
        </div>
      </div>
      <div className="more-details">
        <div className="paragraphs">
          <p>I'm an experienced designer having worked in many small companies and start-ups where creating revolves around a team-based environment. User experience is where my passion lies and creating a good user experience both through functionality and aesthetically is what I believe makes people happy.</p>

          <p>My skills include branding, prototyping, researching, product design and front-end development. I enjoy designing apps and websites then converting them to improve my development skills. As a digital designer, I'm always curious to experiment to learn and I am currently looking to improve my animation for the web.</p>

          <p>I have recently graduated from university and I'm currently working as a designer for a start-up based in London while occasionally freelancing with logo designs, graphics and web designs.</p>
        </div>
        <div className="skills-list">
          <h3>Technical Skills</h3>
          <ul>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Adobe After Effects</li>
            <li>Figma</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>Greensock</li>
            <li>Wordpress</li>
            <li>Squarespace</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>User Research</li>
            <li>User Testing</li>
            <li>Print Design</li>
            <li>Branding</li>
            <li>Photogtaphy</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

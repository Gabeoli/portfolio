import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import OkoachOne from "../../images/okoach-assets/Okoach_1.jpg"
import OkoachTwo from "../../images/okoach-assets/Okoach_2.jpg"
import OkoachThree from "../../images/okoach-assets/Okoach_3.jpg"
import OkoachFour from "../../images/okoach-assets/Okoach_4.jpg"
import OkoachFive from "../../images/okoach-assets/Okoach_5.jpg"
import OkoachSix from "../../images/okoach-assets/Okoach_6.jpg"
import OkoachSeven from "../../images/okoach-assets/Okoach_7.jpg"
import BackBtn from "../../components/BackBtn"

import ProjectContent from "../../components/ProjectContent"

const OkoachPage = () => (
  <Layout>
    <SEO title="Okoach"/>
    <div className="project-page">
        <div className="project-details">
            <div className="text-holder">   
                <div className="inline-text">
                    <h1>Okoach</h1>
                    <h2>Branding - UX - Development</h2>
                </div>
                <ProjectContent project="okoach" />
                <div className="description">
                    <p>
                        <a href="https://github.com/Gabeoli/Okoach" target="_blank">Visit Github Repo</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="project-image-list">
            <ul>
                <li>
                    <img src={OkoachOne} alt="Okoach 1"/>
                </li>
                <li>
                    <img src={OkoachTwo} alt="Okoach 2"/>
                </li>
                <li>
                    <img src={OkoachThree} alt="Okoach 3"/>
                </li>
                <li>
                    <img src={OkoachFour} alt="Okoach 4"/>
                </li>
                <li>
                    <img src={OkoachFive} alt="Okoach 5"/>
                </li>
                <li>
                    <img src={OkoachSix} alt="Okoach 6"/>
                </li>
                <li>
                    <img src={OkoachSeven} alt="Okoach 7"/>
                </li>
            </ul>
        </div>
        <BackBtn/>
    </div>
  </Layout>
)

export default OkoachPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import HSBCOne from "../../images/hsbc-assets/HSBC_1.jpg"
import HSBCTwo from "../../images/hsbc-assets/HSBC_2.jpg"
import HSBCThree from "../../images/hsbc-assets/HSBC_3.jpg"
import HSBCFour from "../../images/hsbc-assets/HSBC_4.jpg"
import HSBCFive from "../../images/hsbc-assets/HSBC_5.jpg"
import HSBCSix from "../../images/hsbc-assets/HSBC_6.jpg"
import HSBCSeven from "../../images/hsbc-assets/HSBC_7.jpg"
import HSBCEight from "../../images/hsbc-assets/HSBC_8.jpg"

import BackBtn from "../../components/BackBtn"

const HSBCPage = () => (
  <Layout>
    <SEO title="HSBC"/>
    <div className="project-page">
        <div className="project-details">
            <div className="text-holder">   
                <div className="inline-text">
                    <h1>HSBC Private Banking</h1>
                    <h2>UX - Research - App Design</h2>
                </div>
                <div className="description">
                    <p>
                        As part of a live brief, HSBC asked to create something for their private banking, aiming it at the new generation of wealth or inheritance from old wealth, hence the app design. Research was conducted about what is private banking, the demographic it's aimed at and how competitors approach digital private banking. Brainstorms and wireframes were created which led to the high fidelity prototype.

                        <br/><br/>

                        <span className="disclosure">The HSBC work implemented here has not been accepted for commercial use by HSBC</span>

                        <br/><br/>
                        <a href="https://www.figma.com/proto/aV72027UGWfUxu1PIRkKjQxZ/HSBC-Private-Banking?node-id=11%3A1&viewport=324%2C-291%2C0.303881973028183&scaling=scale-down" target="_black">View Figma Prototype</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="project-image-list">
            <ul>
                <li>
                    <img src={HSBCOne} alt="HSBC 1"/>
                </li>
                <li>
                    <img src={HSBCTwo} alt="HSBC 2"/>
                </li>
                <li>
                    <img src={HSBCThree} alt="HSBC 3"/>
                </li>
                <li>
                    <img src={HSBCFour} alt="HSBC 4"/>
                </li>
                <li>
                    <img src={HSBCFive} alt="HSBC 5"/>
                </li>
                <li>
                    <img src={HSBCSix} alt="HSBC 6"/>
                </li>
                <li>
                    <img src={HSBCSeven} alt="HSBC 7"/>
                </li>
                <li>
                    <img src={HSBCEight} alt="HSBC 8"/>
                </li>
            </ul>
        </div>
        <BackBtn/>
    </div>
  </Layout>
)

export default HSBCPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import TheHubbTwo from "../../images/thehubb-assets/TheHubb_2.png"
import BackBtn from "../../components/BackBtn"


const TheHubbPage = () => (
  <Layout>
    <SEO title="TheHubb"/>
    <div className="project-page">
        <div className="project-details">
            <div className="text-holder">   
                <div className="inline-text">
                    <h1>The Hubb</h1>
                    <h2>Web Design</h2>
                </div>
                <div className="description">
                    <p>
                        Web design for a Kenyan restaurant based in Northwood. Followed a brand aesthetic similar to their restaurants with shades of pinks and oranges mixed with good photography of food. Their aim for the website was to have a web presence and help people learn more about The Hubbs meaning and story. <br/><br/>
                        <a href="https://thehubbrestaurant.co.uk" target="_blank">View their website</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="project-image-list">
            <ul>
                <li>
                    <img src={TheHubbTwo} alt="TheHubb 2"/>
                </li>
            </ul>
        </div>
        <BackBtn/>
    </div>
  </Layout>
)

export default TheHubbPage

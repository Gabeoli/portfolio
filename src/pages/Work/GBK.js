import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import GBKOne from "../../images/gbk-assets/GBK_1.jpg"
import GBKTwo from "../../images/gbk-assets/GBK_Home.jpg"
import GBKThree from "../../images/gbk-assets/GBK_Jobs.jpg"

import BackBtn from "../../components/BackBtn"


const GBKPage = () => (
  <Layout>
    <SEO title="GBK"/>
    <div className="project-page">
        <div className="project-details">
            <div className="text-holder">   
                <div className="inline-text">
                    <h1>GBK Careers</h1>
                    <h2>Web Design</h2>
                </div>
                <div className="description">
                    <p>
                        A proposed design for Gourmet Burger Kitchen (GBK) careers website. The idea of the layout was to help candidates prepare for working at GBK by providing history of the origins of GBK, using bright colours and good images to break up the sections on the website while also sticking to the brand guidelines. Designed was both the homepage and careers page.
                    </p>
                </div>
            </div>
        </div>
        <div className="project-image-list">
            <ul>
                <li>
                    <img src={GBKTwo} alt="GBK 1"/>
                </li>
                <li>
                    <img src={GBKThree} alt="GBK 1"/>
                </li>
            </ul>
        </div>
        <BackBtn/>
    </div>
  </Layout>
)

export default GBKPage

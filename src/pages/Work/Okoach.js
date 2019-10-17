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
                <div className="description">
                    <p>
                        The problem with online coaching is that many coaches use text based software such as word documents or excel spreadsheets to distribute their training programmes to their athletes and clients. Okoach is a mobile app designed to tackle this problem, allowing coaches to create training programmes and send to their athletes. Research and testing was done with coaches and athletes in order to design a great user experience for the demographic.

                        <br/><br/>

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

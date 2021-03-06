import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import StampOne from "../../images/stamp-assets/Stamp_1.jpg"
import StampTwo from "../../images/stamp-assets/Stamp_2.jpg"
import StampThree from "../../images/stamp-assets/Stamp_3.jpg"
import StampFour from "../../images/stamp-assets/Stamp_4.jpg"
import StampFive from "../../images/stamp-assets/Stamp_5.jpg"
import StampSix from "../../images/stamp-assets/Stamp_6.jpg"
import StampSeven from "../../images/stamp-assets/Stamp_7.jpg"
import StampEight from "../../images/stamp-assets/Stamp_8.jpg"
import StampNine from "../../images/stamp-assets/Stamp_9.jpg"
import StampTen from "../../images/stamp-assets/Stamp_10.jpg"
import BackBtn from "../../components/BackBtn"

import ProjectContent from "../../components/ProjectContent"

const StampPage = () => (
  <Layout>
    <SEO title="Stamp"/>
    <div className="project-page">
        <div className="project-details">
            <div className="text-holder">   
                <div className="inline-text">
                    <h1>Stamp</h1>
                    <h2>Research - Branding - UX - App Design</h2>
                </div>
                <ProjectContent project="stamp"/>
                <div className="description">
                    <p>
                        <a href="https://www.figma.com/proto/KoroukKUCXWkQiDhBIzb83Il/Stamp-Digital-Experience?node-id=7%3A14&viewport=68%2C413%2C0.10929367691278458&scaling=scale-down" target="_blank">View Figma Prototype</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="project-image-list">
            <ul>
                <li>
                    <img src={StampOne} alt="Stamp 1"/>
                </li>
                <li>
                    <img src={StampSix} alt="Stamp 6"/>
                </li>
                <li>
                    <img src={StampSeven} alt="Stamp 7"/>
                </li>
                <li>
                    <img src={StampEight} alt="Stamp 8"/>
                </li>
                <li>
                    <img src={StampNine} alt="Stamp 9"/>
                </li>
                <li>
                    <img src={StampTen} alt="Stamp 10"/>
                </li>
                <li>
                    <img src={StampTwo} alt="Stamp 2"/>
                </li>
                <li>
                    <img src={StampThree} alt="Stamp 3"/>
                </li>
                <li>
                    <img src={StampFour} alt="Stamp 4"/>
                </li>
                <li>
                    <img src={StampFive} alt="Stamp 5"/>
                </li>
            </ul>   
        </div>
        <BackBtn/>
    </div>
  </Layout>
)

export default StampPage

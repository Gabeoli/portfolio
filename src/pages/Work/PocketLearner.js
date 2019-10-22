import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import PocketLearnerOne from "../../images/pocketlearner-assets/PocketLearner_1.jpg"
import PocketLearnerTwo from "../../images/pocketlearner-assets/PocketLearner_2.jpg"
import PocketLearnerThree from "../../images/pocketlearner-assets/PocketLearner_3.jpg"
import PocketLearnerFour from "../../images/pocketlearner-assets/PocketLearner_4.jpg"
import PocketLearnerFive from "../../images/pocketlearner-assets/PocketLearner_5.jpg"
import PocketLearnerSix from "../../images/pocketlearner-assets/PocketLearner_6.jpg"
import PocketLearnerSeven from "../../images/pocketlearner-assets/PocketLearner_7.jpg"
import BackBtn from "../../components/BackBtn"
import ProjectContent from "../../components/ProjectContent"

const PocketLearnerPage = () => (
  <Layout>
    <SEO title="PocketLearner"/>
    <div className="project-page">
        <div className="project-details">
            <div className="text-holder">   
                <div className="inline-text">
                    <h1>Pocket Learner</h1>
                    <h2>UX - Rebrand - App Design</h2>
                </div>
                <ProjectContent project="pocketlearner"/>
            </div>
        </div>
        <div className="project-image-list">
            <ul>
                <li>
                    <img src={PocketLearnerOne} alt="PocketLearner 1"/>
                </li>
                <li>
                    <img src={PocketLearnerTwo} alt="PocketLearner 2"/>
                </li>
                <li>
                    <img src={PocketLearnerSeven} alt="PocketLearner 7"/>
                </li>
                <li>
                    <img src={PocketLearnerThree} alt="PocketLearner 3"/>
                </li>
                <li>
                    <img src={PocketLearnerFour} alt="PocketLearner 4"/>
                </li>
                <li>
                    <img src={PocketLearnerFive} alt="PocketLearner 5"/>
                </li>
                <li>
                    <img src={PocketLearnerSix} alt="PocketLearner 6"/>
                </li>
            </ul>
        </div>
        <BackBtn/>
    </div>
  </Layout>
)

export default PocketLearnerPage

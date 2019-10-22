import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import EmberOne from "../../images/ember-assets/Ember_1.jpg"
import EmberTwo from "../../images/ember-assets/Ember_2.jpg"
import EmberThree from "../../images/ember-assets/Ember_3.jpg"
import EmberFour from "../../images/ember-assets/Ember_4.jpg"
import EmberFive from "../../images/ember-assets/Ember_5.jpg"

import BackBtn from "../../components/BackBtn"
import ProjectContent from "../../components/ProjectContent"


const EmberPage = () => (
  <Layout>
    <SEO title="Ember"/>
    <div className="project-page">
        <div className="project-details">
            <div className="text-holder">   
                <div className="inline-text">
                    <h1>Ember</h1>
                    <h2>UX - Research - App Design</h2>
                </div>
                <ProjectContent project="ember"/>
            </div>
        </div>
        <div className="project-image-list">
            <ul>
                <li>
                    <img src={EmberOne} alt="Ember 1"/>
                </li>
                <li>
                    <img src={EmberTwo} alt="Ember 2"/>
                </li>
                <li>
                    <img src={EmberThree} alt="Ember 3"/>
                </li>
                <li>
                    <img src={EmberFour} alt="Ember 4"/>
                </li>
                <li>
                    <img src={EmberFive} alt="Ember 5"/>
                </li>
            </ul>
        </div>
        <BackBtn/>
    </div>
  </Layout>
)

export default EmberPage

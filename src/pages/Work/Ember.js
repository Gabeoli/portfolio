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
                <div className="description">
                    <p>
                        Ember is an app aimed for patients currently looking for clinical trials. As a team of three people we were to research, design and present this project at university, my role was the UX Designer. The app is also aimed at doctors/clinics to be able to list their clinical trails in one place, patients have the ability to contact these doctors to ask questions pre, during and post clinical trial. The user experience was aimed to be simple and almost linear, with large prominent buttons and minimal text on screen to not confuse patients when looking for a trial.
                    </p>
                </div>
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

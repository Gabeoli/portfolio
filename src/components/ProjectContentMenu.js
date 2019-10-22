import React, { Component } from 'react'
import data from "../assets/case_studies/CaseStudy"
import { TimelineLite, TweenMax, TweenLite, RoughEase} from "gsap/all"

class ProjectContentMenu extends Component {

    constructor(props){
        super(props);
        this.textEl = null;
        this.fadeTransition = null;
        this.state = {
            selectedPart: "overview",
            caseStudy: data,
            project: "",
            active: 'overview',
        }
    }

    sendCaseStudy = (part) => {
        this.fadeTransition = new TimelineLite()
        .to(this.textEl, 0.3, {opacity: 0, ease: Power3.easeOut})
        .to(this.textEl, 1, {opacity: 1, delay: 0.5, ease: Power3.easeOut});
        if(this.state.selectedPart !== part){
            this.setState({
                active: part
            })
            setTimeout(() => {
                this.setState({
                    selectedPart: part,
                })
                part = this.state.selectedPart;
            },500)
        }
    }
    

    setActive(value){
        return ((value === this.state.active) ? 'active': '');
    }

    render() {

        var part = this.state.selectedPart;
        return (
            <div className="content">
                <div className="tabs">
                    <ul>
                        <li onClick={() => this.sendCaseStudy('overview')} className={this.setActive('overview')}>Overview</li>
                        <li onClick={() => this.sendCaseStudy('problem')} className={this.setActive('problem')}>Problem</li>
                        <li onClick={() => this.sendCaseStudy('users')} className={this.setActive('users')}>Users & Demographic</li>
                        <li onClick={() => this.sendCaseStudy('roles')} className={this.setActive('roles')}>Role & Process</li>
                        <li onClick={() => this.sendCaseStudy('challenges')} className={this.setActive('challenges')}>Challenges</li>
                            <li onClick={() => this.sendCaseStudy('outcome')} className={this.setActive('outcome')}>Outcome</li>
                        </ul>
                </div>
                <div className="case-study">
                    <p ref={p => this.textEl = p}>{this.state.caseStudy[this.props.project][part]}</p>
                </div>
            </div>
        )
    }
}

export default ProjectContentMenu
import React, { Component } from 'react'
import data from "../assets/case_studies/CaseStudy"

class ProjectContentMenuMobile extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedPart: "overview",
            caseStudy: data,
            project: "",
            active: 'overview',
        }
    }

    sendCaseStudy = (part) => {
        if(this.state.selectedPart !== part){
            this.setState({
                selectedPart: part,
                active: part
            })
            part = this.state.selectedPart;
            console.log()
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
                        <li onClick={() => this.sendCaseStudy('overview')} className={this.setActive('overview')}></li>
                        <li onClick={() => this.sendCaseStudy('problem')} className={this.setActive('problem')}></li>
                        <li onClick={() => this.sendCaseStudy('users')} className={this.setActive('users')}></li>
                        <li onClick={() => this.sendCaseStudy('roles')} className={this.setActive('roles')}></li>
                        <li onClick={() => this.sendCaseStudy('challenges')} className={this.setActive('challenges')}></li>
                            <li onClick={() => this.sendCaseStudy('outcome')} className={this.setActive('outcome')}></li>
                        </ul>
                </div>
                <div className="case-study">
                    <h3>{this.state.selectedPart}</h3>
                    <p>{this.state.caseStudy[this.props.project][part]}</p>
                </div>
            </div>
        )
    }
}

export default ProjectContentMenuMobile
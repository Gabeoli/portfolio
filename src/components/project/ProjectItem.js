import React, { Component } from 'react'

export default class ProjectItem extends Component {
    render() {
        return (
            <div className="project-item">
                <div className="project-image">
                    <img src={this.props.image}/>
                </div>
                <div className="project-text">
                    <h3>{this.props.project}</h3>
                    <p>{this.props.tags}</p>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from "gatsby"

class ProjectItem extends Component {
    
    render() {
        return (
            <div className="project-item">
                <div className="project-image">
                    <Link to={"Work/" + this.props.link}>
                        <img src={this.props.image}/>
                    </Link>
                </div>
                <div className="project-text">
                <Link to={"Work/" + this.props.link}>
                    {this.props.project}
                </Link>
                    <p>{this.props.tags}</p>
                </div>
            </div>
        )
    }
}

export default ProjectItem

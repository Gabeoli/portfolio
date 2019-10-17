import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class BackBtn extends Component {
    render() {
        return (
        <div className="back-to-projects-btn">
            <Link to="/#project-section">Back to Projects</Link>
        </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class MenuDesktop extends Component {
    render() {
        return (
            <nav id="desktop-menu">
                <ul>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

    
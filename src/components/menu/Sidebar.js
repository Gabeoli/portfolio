import React, { Component } from 'react'
import Link from 'gatbsy'
export default class Sidebar extends Component {
    render() {
        return (
            <div class="sidebar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Work">Work</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

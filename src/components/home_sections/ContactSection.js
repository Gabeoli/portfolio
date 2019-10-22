import React, { Component } from 'react'
import {Link} from 'gatsby'

class ContactSection extends Component {
    render() {
        return (
            <section id="contact-section">
                <div className="text-container">
                    <h1>You should shoot me an email.</h1>
                    <a href="mailto:me@gabrieldeanolivar.com">me@gabrieldeanolivar.com</a>
                </div>
            </section>
        )
    }
}

export default ContactSection

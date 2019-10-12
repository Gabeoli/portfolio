import React, { Component } from 'react'
import {Link} from 'gatsby'

class ContactSection extends Component {
    render() {
        return (
            <section id="contact-section">
                <div className="text-container">
                    <h1>You saw my projects, now lets have a conversation.</h1>
                    <Link to="contact">Shoot me an e-mail</Link>
                </div>
            </section>
        )
    }
}

export default ContactSection
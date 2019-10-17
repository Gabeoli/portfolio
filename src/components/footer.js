import React from "react"
import LinkedInIcon from '../images/icons/linkedin_icon.svg'
import GithubIcon from '../images/icons/github_icon.svg'
import BehanceIcon from '../images/icons/behance_icon.svg'


const Footer = () => (
  <footer>
    <div className="social-media-icons">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/gabriel-olivar/" target="_blank">
                    <img src={LinkedInIcon}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Gabeoli" target="_blank">
                    <img src={GithubIcon}/>
                </a>
            </li>
            <li>
                <a href="https://www.behance.net/GabeOli" target="_blank">
                    <img src={BehanceIcon}/>
                </a>
            </li>
        </ul>
    </div>
    <div id="name">
        <p>Gabriel Dean Olivar - Designed and Developed</p>
    </div>
  </footer>
)


export default Footer

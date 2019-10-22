import React, { Component } from 'react'
import logo from '../images/my_logo_white.svg'
import logoTwo from '../images/my_logo.svg'
import { TimelineLite, TweenMax, TweenLite, RoughEase} from "gsap/all"


class HomeLoad extends Component {
    constructor(props){
        super(props);
        this.loadingContainer = null;
        this.loadingEnter = null;
        this.loadingLogoOne = null;
        this.loadingText= null;
        this.loadingWipeOne = null;
        this.loadingTimeline = null;
    }

    componentDidMount(){
            this.myTween = new TimelineLite({paused: true})
            .fromTo(this.loadingLogoOne, 1, 
                {opacity: 0, y: -100}, 
                {opacity: 1, ease: Power3.easeOut, delay: 1, y: 0})
            .fromTo(this.loadingEnter,1, 
                {y: "0%"}, 
                {y: "100%", ease: Power3.easeOut})
            .fromTo(this.loadingWipeOne, 1, 
                {y: "-100%"}, 
                {y: "0%", ease: Power3.easeOut}, "-=1")
            .fromTo(this.loadingText, 0.25, 
                {opacity: 0, y: -20}, 
                {opacity: 1, y: 0, ease: Power3.easeOut})
            .to(this.loadingText, 0.5, {fontSize: "10em", ease: Power3.easeOut})
            .to(this.loadingContainer, 1, {y: "100%", ease: Power3.easeOut, delay: 1})  
            .play();
    }



    render() {
        return (
            <div ref={div => this.loadingContainer = div}className="on-enter-animation">
                <div className="enter" ref={div => this.loadingEnter = div}>
                    <img className="logo-loading" ref={img => this.loadingLogoOne = img} src={logo} alt="GDO"/>
                </div>
                <div className="wipe-one" ref={div => this.loadingWipeOne = div}>
                    <h1 ref={h1 => this.loadingText = h1}>Whats up?</h1>
                </div>
                <div className="wipe-two">
                </div>
            </div>
        )
    }
}

export default HomeLoad
import React, { Component } from 'react'
import { TimelineLite, TweenMax, TweenLite, RoughEase, CSSPlugin} from "gsap"

class PageTransition extends Component {
    constructor(props){
        super(props);
        this.pageTransition = null;
        this.wipeBlack = null;
        this.wipeWhite = null;
        this.transitionTl = null;

    }   
    componentDidMount(){
        this.transitionTl = new TimelineLite({paused: true})
        .fromTo(this.wipeBlack, 1, {y: "-100%"}, {y: "0%", ease: Power3.easeOut })
        .to(this.pageTransition, 0.5, {y: "100%", ease: Power3.easeOut})
        .play();
    }

    render() {
        return (
            <div ref={div => this.pageTransition = div} className="page-transition">
                <div ref={div => this.wipeBlack = div} className="wipe-black">
                </div>
            </div>
        )
    }
}

export default PageTransition
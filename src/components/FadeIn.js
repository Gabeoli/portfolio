import React, { Component } from 'react'
import { TimelineLite, TweenMax, TweenLite, RoughEase} from "gsap/all"

class FadeIn extends Component {
    constructor(props){
        super(props);
        this.containerEl = null;
        this.pageFade =  null;

    }   
    componentDidMount(){
        this.transitionTl = new TimelineLite({paused: true})
        .fromTo(this.containerEl, 1, {opacity: 0}, {opacity: 1, delay: 1})
        .play();
    }

    render() {
        return (
            <div ref={div => this.containerEl = div}>
                {this.props.children}
            </div>
        )
    }
}

export default FadeIn

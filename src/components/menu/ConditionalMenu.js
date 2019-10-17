import React, { Component } from 'react'
import MenuBtn from './MenuBtn'
import MenuDesktop from './MenuDesktop'
import anime from 'animejs'

class ConditionalMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
      }
    
      render() {
        const isDesktop = this.state.isDesktop;
    
        return (
          <div>
            {isDesktop ? (
              <MenuDesktop/>
            ) : (
              <MenuBtn/>
            )}
          </div>
        );
    }
}

export default ConditionalMenu

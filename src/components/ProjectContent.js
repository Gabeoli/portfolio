import React, { Component } from 'react'
import ProjectContentMenu from './ProjectContentMenu';
import ProjectContentMenuMobile from './ProjectContentMenuMobile';

class ProjectContent extends Component {
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
        this.setState({ isDesktop: window.innerWidth > 840 });
      }
    
      render() {
        const isDesktop = this.state.isDesktop;
    
        return (
          <div className="content-holder">
            {isDesktop ? (
              <ProjectContentMenu project={this.props.project}/>
            ) : (
              <ProjectContentMenuMobile project={this.props.project}/>
            )}
          </div>
        );
      }
}

export default ProjectContent
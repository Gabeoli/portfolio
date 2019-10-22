import React, { Component } from 'react'
import ProjectItem from '../project/ProjectItem'
import ProjectData from '../../assets/ProjectData'

class ProjectsSection extends Component {

    render() {

        return (
            <section id="project-section">
                <div className="row">
                    <ProjectItem 
                        image={ProjectData.stamp[0].image}
                        project={ProjectData.stamp[0].projectName}
                        tags="Research - Branding - UX - App Design"
                        link={ProjectData.stamp[0].link}
                    />
                    <ProjectItem 
                        image={ProjectData.okoach[0].image}
                        project={ProjectData.okoach[0].projectName}
                        tags="Branding - UX - Development"
                        link={ProjectData.okoach[0].link}
                    />
                </div>
                <div className="row">
                    <ProjectItem 
                        image={ProjectData.hsbc[0].image}
                        project={ProjectData.hsbc[0].projectName}
                        tags="UX - Research - App Design"
                        link={ProjectData.hsbc[0].link}
                    />
                    <ProjectItem 
                        image={ProjectData.thehubb[0].image}
                        project={ProjectData.thehubb[0].projectName}    
                        tags="Web Design"
                        link={ProjectData.thehubb[0].link}
                    />      
                </div>
                <div className="row">    
                    <ProjectItem 
                        image={ProjectData.ember[0].image}
                        project={ProjectData.ember[0].projectName}
                        tags="UX - Research - App Design"
                        link={ProjectData.ember[0].link}
                    />
                    <ProjectItem 
                        image={ProjectData.pocketlearner[0].image}
                        project={ProjectData.pocketlearner[0].projectName}
                        tags="UX - Rebrand - App Design"
                        link={ProjectData.pocketlearner[0].link}
                    />
                </div>
                <div className="row">
                    <ProjectItem 
                        image={ProjectData.gbkcareers[0].image}
                        project={ProjectData.gbkcareers[0].projectName}
                        tags="Web Design"
                        link={ProjectData.gbkcareers[0].link}
                    />
                    <div className="blank-column"/>
                </div>
            </section>
        )
    }
}

export default ProjectsSection  
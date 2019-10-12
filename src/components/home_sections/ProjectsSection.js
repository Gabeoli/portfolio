import React, { Component } from 'react'
import ProjectItem from '../project/ProjectItem'
import ProjectData from '../../assets/ProjectData'

class ProjectsSection extends Component {

    render() {

        return (
            <section id="project-section">
                <div className="row">
                    <ProjectItem 
                        image={ProjectData.okoach[0].image}
                        project={ProjectData.okoach[0].projectName}
                        tags="Branding - UX - Development"
                    />
                    <ProjectItem 
                        image={ProjectData.stamp[0].image}
                        project={ProjectData.stamp[0].projectName}
                        tags="Branding - UX - Development"
                    />
                </div>
                <div className="row">
                    <ProjectItem 
                        image={ProjectData.hsbc[0].image}
                        project={ProjectData.hsbc[0].projectName}
                        tags="Branding - UX - Development"
                    />
                    <ProjectItem 
                        image={ProjectData.thehubb[0].image}
                        project={ProjectData.thehubb[0].projectName}    
                        tags="Branding - UX - Development"
                    />      
                </div>
                <div className="row">    
                    <ProjectItem 
                        image={ProjectData.ember[0].image}
                        project={ProjectData.ember[0].projectName}
                        tags="Branding - UX - Development"
                    />
                    <ProjectItem 
                        image={ProjectData.pocketlearner[0].image}
                        project={ProjectData.pocketlearner[0].projectName}
                        tags="Branding - UX - Development"
                    />
                </div>
                <div className="row">
                    <ProjectItem 
                        image={ProjectData.gbkcareers[0].image}
                        project={ProjectData.gbkcareers[0].projectName}
                        tags="Branding - UX - Development"
                    />
                    <div className="blank-column"/>
                </div>
            </section>
        )
    }
}

export default ProjectsSection  
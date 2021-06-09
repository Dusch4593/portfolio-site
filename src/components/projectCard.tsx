import * as React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

// @ts-ignore
import { projectStyles } from '../styles/portfolio.module.css'

interface ProjectCardProps {
  demoURL: string 
  githubURL: string 
  imageData: any 
  title: string 
  description?: string
}

const ProjectCard = ({ demoURL, githubURL, imageData, title, description }: ProjectCardProps) => {
  return (
    <React.Fragment>
      <div className="project-card">
        <GatsbyImage image={imageData} className={projectStyles.projectImage} alt={title} />
        <div className={projectStyles.projectInfo}>
          <h3>{ title }</h3>
          <p>{ description }</p>
          <a href={demoURL} rel="noopener noreferrer" target="_blank">View the demo</a> &nbsp;||&nbsp;
          <a href={githubURL} rel="noopener noreferrer" target="_blank">View the source</a>
          <br/><br/><br/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectCard

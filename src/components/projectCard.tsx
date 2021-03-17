import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'

// @ts-ignore
import * as projectStyles from '../styles/portfolio.module.css'

interface ProjectCardProps {
  demoURL: string 
  githubURL: string 
  imageData: FluidObject 
  title: string 
  description?: string
}

const ProjectCard = ({ demoURL, githubURL, imageData, title, description }: ProjectCardProps) => {
  const passedAlt = title
  return(
    <React.Fragment>
      <div className="project-card">
        <Img className={projectStyles.projectImage} fluid={imageData} alt={title} />
        <div className={projectStyles.projectInfo}>
          <h2>{ title }</h2>
          <p>{ description }</p>
          <a href={demoURL} rel="noopener noreferrer" target="_blank">View the demo</a> &nbsp;||&nbsp;
          <a href={githubURL} rel="noopener noreferrer" target="_blank">View the source</a>
          <br/><br/><br/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectCard

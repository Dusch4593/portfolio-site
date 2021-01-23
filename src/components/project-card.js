import React from 'react'
import Image from 'gatsby-image'
import projectStyles from '../styles/portfolio.module.css'

const ProjectCard = ({ demoURL, githubURL, imageData, title, description }) => {
  return(
    <div className="project-card">
      <Image className={projectStyles.projectImage} fluid={ imageData } alt={ title } />
      <div className={projectStyles.projectInfo}>
        <h2>{ title }</h2>
        <p>{ description }</p>
        <a href={demoURL} rel="noopener noreferrer" target="_blank">View the demo</a> &nbsp;
        <a href={githubURL} rel="noopener noreferrer" target="_blank">View the source</a>
        <br/><br/><br/>
      </div>
    </div>
  )
}

export default ProjectCard

import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'


const ProjectCard = ({ slug }) => {
  return(
    <div className="project-card">
      <Link to={`/${slug}`}></Link>
    </div>
  )
}

export default ProjectCard

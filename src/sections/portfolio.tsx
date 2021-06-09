import * as React from 'react'
import SEO from '../components/seo'
import ProjectCard from '../components/projectCard'
import { nanoid } from 'nanoid'
import { useStaticQuery, graphql } from 'gatsby'

// @ts-ignore
import { portfolioStyles } from '../styles/portfolio.module.css'

const Portfolio = () => {

  const query = useStaticQuery(graphql`query projectImagesQuery {
  allProjectsJson {
    edges {
      node {
        title
        description
        github_url
        demo_url
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`)

  const projects = query.allProjectsJson.edges

  return (
    <React.Fragment>
      <SEO title='Portfolio' />
      <div className={portfolioStyles.portfolioWrapper}>
        <h3>Projects</h3>
        {projects.map(({node: project}: any) => {
          const projectID: string = nanoid() // assigns a unique, randomly-generated string as an id
          const title: string = project.title
          const description: string = project.description
          const demoURL: string = project.demo_url
          const githubURL: string = project.github_url
          const imageData = project.image.childImageSharp.gatsbyImageData

          const props = { 
            title,
            description,
            demoURL,
            githubURL,
            imageData
          }
          
          return (
            <ProjectCard key={projectID} {...props} />
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default Portfolio

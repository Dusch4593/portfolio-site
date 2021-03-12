import * as React from 'react'
import SEO from '../components/seo'
import ProjectCard from '../components/projectCard'
import { nanoid } from 'nanoid'
import { useStaticQuery, graphql } from 'gatsby'

// @ts-ignore
import portfolioStyles from '../styles/portfolio.module.css'

const Portfolio = () => {

  const query = useStaticQuery(graphql`
      query projectImagesQuery {
      allProjectsJson {
        edges {
          node {
            title
            description
            github_url
            demo_url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
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
        {projects.map(({node: project}: any) => {
          const projectID = nanoid()
          const title = project.title
          const description = project.description
          const demoURL = project.demo_url
          const githubURL = project.github_url
          const imageData = project.image.childImageSharp.fluid

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
  )
}

export default Portfolio

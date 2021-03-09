import * as React from 'react'
import SEO from '../components/seo'
import ProjectCard from '../components/projectCard'
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
      <section className={portfolioStyles.portfolioWrapper}>
        {projects.map(({node: project}: any) => {
          const projectNo = project.projectNo
          const title = project.title
          const description = project.description
          const demoURL = project.demo_url
          const githubURL = project.github_url
          const imageData = project.image.childImageSharp.fluid
          
          return (
            <ProjectCard
              key={projectNo}
              title={title}
              description={description}
              demoURL={demoURL}
              githubURL={githubURL}
              imageData={imageData}
            />
          )
        })}
      </section>
    </React.Fragment>
  )
}

export default Portfolio

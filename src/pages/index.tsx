import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const aboutStyles = require("../styles/about.module.css")


const IndexPage = () => {
  
  const query = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "images/portfolio-site-image.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 375, maxHeight: 500) {
          srcSet
          src
        }
      }
    }
  }
  `)

  const imageData = query.file.childImageSharp.fluid.src

  return (
    <Layout>
      <SEO title="Home" />
      <section className={aboutStyles.aboutSection}>
          <div className={aboutStyles.aboutInfo}>
            <img className={aboutStyles.aboutImage} srcSet={imageData} alt="Brandon Dusch"/>
            <p className={aboutStyles.aboutText}>
            <h2>Hi! I'm Brandon </h2>
            Creative full stack software engineer with a passion for learning and problem-solving. My attraction to tech stems from my prior background in music and public libraries, where I learned to work with patterns and build on top of them. I want to continue to grow and improve my new craft, and change the world for the better while doing it.
            </p>
          </div>
      </section>
    </Layout>
  )
}

export default IndexPage
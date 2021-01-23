import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import aboutStyles from "../styles/about.module.css"


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
            <img className={aboutStyles.aboutImage} srcSet={imageData}/>
            <p className={aboutStyles.aboutText}>
              Creative, dedicated software engineer based in Cape Cod, Massachussets, USA and living in North Chatham. <br />
              I'm a self-directed learner who enjoys solving interesting and complex problems. I also enjoy collaborating with <br />
              others on fun, challenging projects.
            </p>
          </div>
      </section>
    </Layout>
  )

}

export default IndexPage

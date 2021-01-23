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
            <h2>Hi! I'm Brandon </h2>
              Creative, dedicated software engineer based in Cape Cod, Massachussets, USA and living in North Chatham. <br />
              I'm a self-directed learner who enjoys solving interesting and complex problems. I also enjoy collaborating with <br />
              others on fun, challenging projects.
            </p>
          </div>
          <div className="technologies-section">
            <div className="icon-gallery">
              {/* Add some icons that represent each programming language and framework that I know and demonstrate on my portfolio. 
                  The opacity should be less than one and the background should be a bright, cool color like a bright green or bright 
                  cherry red.

                  Google terms like "how to create a list of programming language icons for portfolio" and go from there.
              */}
            </div>
          </div>
      </section>
    </Layout>
  )

}

export default IndexPage

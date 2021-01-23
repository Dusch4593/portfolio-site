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
  
  const query = null
  return (
    <Layout>
      <SEO title="Home" />
      /* About Section */
      <section className="about-section">
          <div className={aboutStyles.aboutInfo}>
            <h1>Hi! I'm Brandon!</h1>
            <p>
              Creative, dedicated software engineer based in Cape Cod, Massachussets, USA and living in North Chatham. <br />
              I'm a self-directed learner who enjoys solving interesting and complex problems. I also enjoy collaborating with <br />
              others on fun, challenging projects.
            </p>
          </div>
      </section>
      /* Portfolio Section */
      /* Blog Section */
      /* Contact Section */

      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </Layout>
  )

}

export default IndexPage

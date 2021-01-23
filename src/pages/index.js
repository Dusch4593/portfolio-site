import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


// Set up our base styles using Material UI
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});



const IndexPage = () => {
  const classes = useStyles()

  const query = null
  return (
    <Layout>
      <SEO title="Home" />
      /* About Section */
      <section className="about-section">
          <div className="about-info">
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

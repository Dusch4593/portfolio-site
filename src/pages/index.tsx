import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Portfolio from '../sections/portfolio'
import Blog from '../sections/blog'
import Contact from '../sections/contact'
import { useStaticQuery, graphql } from 'gatsby'

// @ts-ignore
import * as aboutStyles from '../styles/about.module.css'


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
      <SEO title='Home' />
      <section id='about' className={aboutStyles.aboutSection}>
          <div className={aboutStyles.aboutInfo}>
            <img className={aboutStyles.aboutImage} srcSet={imageData} alt='Brandon Dusch'/>
            <div className={aboutStyles.aboutText}>
              <h2>Hi! I'm Brandon </h2>
              <p>Creative full stack software engineer with a passion for learning and problem-solving. My attraction to tech stems from my prior background in music and public libraries, where I learned to work with patterns and build on top of them. I want to continue to grow and improve my new craft, and change the world for the better while doing it.</p>
            </div>
          </div>
      </section>

    <section id='portfolio'>
      <Portfolio/>
    </section>

    <section id='blog'>
      <Blog/>
    </section>

    <section id='contact'>
      <Contact/>
    </section>
  </Layout>
  )
}

export default IndexPage

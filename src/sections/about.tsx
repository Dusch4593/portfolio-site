import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// @ts-ignore
import * as aboutStyles from '../styles/about.module.css'

const About = () => {
    const query = useStaticQuery(graphql`query MyQuery {
  file(relativePath: {eq: "images/portfolio-site-image.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        width: 375
        height: 500
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
}
`)
  
    const imageData = query.file.childImageSharp.gatsbyImageData.src

    return (
        <React.Fragment>
            <div className={aboutStyles.aboutWrapper}>
                <div className={aboutStyles.aboutInfo }>
                    <img className={aboutStyles.aboutImage} srcSet={imageData} alt='Brandon Dusch'/>
                    <div className={aboutStyles.aboutText}>
                    <h2>Hi! I'm Brandon </h2>
                    <p>Creative full stack software engineer with a passion for learning and problem-solving. My attraction to tech stems from my prior background in music and public libraries, where I learned to work with patterns and build on top of them. I want to continue to grow and improve my new craft, and change the world for the better while doing it.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// @ts-ignore
import * as aboutStyles from '../styles/about.module.css'
// @ts-ignore
import * as globalStyles from '../styles/globals.module.css'

const About = () => {
    return (
        <React.Fragment>
            <h2 className={globalStyles.sectionHeader}>Hi! I'm Brandon </h2>
            <div className={aboutStyles.aboutWrapper}>
                <div className={aboutStyles.aboutInfo }>
                    <StaticImage 
                      src="../../data/images/portfolio-site-image.jpg"
                      alt="Brandon Dusch"
                      className={aboutStyles.aboutImage}
                    />
                    <div className={aboutStyles.aboutText}>
                    <p>Creative full stack software engineer with a passion for learning and problem-solving. My attraction to tech stems from my prior background in music and public libraries, where I learned to work with patterns and build on top of them. I want to continue to grow and improve my new craft, and change the world for the better while doing it.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
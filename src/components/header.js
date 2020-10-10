import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({menuLinks}) => {
  const imageData = useStaticQuery(graphql`
    query profileImageQuery {
      brandon_dusch_profile: file(relativePath: {eq: "brandon_dusch_profile_image.jpg"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header style = {
      {
        background: `#ccdbee`,
      }
    }>
    <div style = {
      {
        display: 'flex',
        alignItems: 'center',
        margin: `0 auto`,
        maxWidth: 960,
      }
    }>
    <nav>
    <ul style = {
      {
        display: 'flex',
        flex: 1
      }
    }>
  <li style={{listStyleType: 'none'}}><Img className="about-images brandon_dusch_profile_image" fluid={imageData.brandon_dusch_profile.childImageSharp.fluid} alt="Brandon Dusch Profile" /></li>
      {
      menuLinks.map(link => (
        <li key = {link.name}
        style = {
          {
            listStyleType: 'none',
            padding: '1rem',
          }
        }>
        <Link style = {
          {
            color: '#5689c7'
          }
        }
        to = {
          link.link
        }
        target = {
          link.target
        }
        rel = {
          link.rel
        }> {
          link.name
        }
        </Link>
        </li>
      ))
    } </ul>
    </nav>
    </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

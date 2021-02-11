import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import contactStyles from '../styles/contact.module.css'

const ContactLinks = () => {
    const data = useStaticQuery(graphql`
        query contactLinkQuery {
        allSite {
            edges {
            node {
                siteMetadata {
                contactLinks {
                    github
                    linkedin
                    twitter
                }
                }
            }
            }
        }
        }
    `)

    const contactLinks = data.allSite.edges[0].node.siteMetadata.contactLinks

    const showLinks = (links) => {
        return Object.keys(links).map((link, index) => {
          const formattedLink = link[0].toUpperCase() + link.slice(1)
          let linkStyle = contactStyles.contactLink
          switch(link) {
            case 'github': 
              linkStyle += ' ' + contactStyles.githubLink
              break
            case 'linkedin':
              linkStyle += ' ' + contactStyles.linkedInLink
              break
            case 'twitter':
              linkStyle += ' ' + contactStyles.twitterLink
              break
            default: 
              linkStyle += ' ' + ''
          }
    
          
          return <a href={links[link]} className={linkStyle} target='_blank' rel='noopener'>
            {formattedLink}
          </a>
        })
      }
    return (
        <React.Fragment>
            {showLinks(contactLinks)}
        </React.Fragment>
    )
}

export default ContactLinks
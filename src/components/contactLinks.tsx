import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// @ts-ignore
import * as contactStyles from '../styles/contact.module.css'

interface ContactLinksProps {
  contactLinks: {
    github: string
    linkedin: string 
    twitter: string
  }
}

const ContactLinks = () => {
    const data: any = useStaticQuery(graphql`
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

    const contactLinks: ContactLinksProps = data.allSite.edges[0].node.siteMetadata.contactLinks

    const showLinks = (links: any) => {
        return Object.keys(links).map((link, index) => {
          const formattedLink: string = link[0].toUpperCase() + link.slice(1)
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
    
          let linkSrc = links[link]
          return <a href={linkSrc} className={linkStyle} target='_blank' rel='noopener' key={index}>
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
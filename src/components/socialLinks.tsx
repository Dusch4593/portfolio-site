import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// @ts-ignore
import * as socialLinksStyles from '../styles/socialLinks.module.css'

interface SocialLinksProps {
  socialLinks: {
    github: string
    linkedin: string 
    twitter: string
  }
}

const SocialLinks = () => {
    const data: any = useStaticQuery(graphql`
        query socialLinkQuery {
        allSite {
            edges {
            node {
                siteMetadata {
                socialLinks {
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

    const socialLinks: SocialLinksProps = data.allSite.edges[0].node.siteMetadata.socialLinks
    
    const showLinks = (links: any) => {
        return Object.keys(links).map((link, index) => {
          const formattedLink: string = link[0].toUpperCase() + link.slice(1)
          let linkStyle = socialLinksStyles.socialLink
          switch(link) {
            case 'github': 
              linkStyle += ' ' + socialLinksStyles.githubLink
              break
            case 'linkedin':
              linkStyle += ' ' + socialLinksStyles.linkedInLink
              break
            case 'twitter':
              linkStyle += ' ' + socialLinksStyles.twitterLink
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
          <section className={socialLinksStyles.socialLinksSection}>
            {showLinks(socialLinks)}
          </section>
        </React.Fragment>
    )
}

export default SocialLinks
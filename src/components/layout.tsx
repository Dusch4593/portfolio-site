/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react'
import { ReactNode }from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'

// @ts-ignore
import * as customLayoutStyles from '../styles/layout.module.css'
// @ts-ignore
import * as footerStyles from '../styles/footer.module.css'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  let menuLinks = data.site.siteMetadata.menuLinks
  
  return (
    <React.Fragment>
      <div className={customLayoutStyles.mainGrid}>
        <Header className={customLayoutStyles.mainMenu} menuLinks={menuLinks} siteTitle={siteTitle.slice(0, siteTitle.indexOf(','))}/>
        <p>
          &nbsp;
        </p>
        <div className={customLayoutStyles.childWrapper}>
          <main className={customLayoutStyles.mainContent}>{children}</main>
          <footer className={footerStyles.footer}>
            Built with <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener noreferrer'> &hearts; & Gatsby</a>, 
             © {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout

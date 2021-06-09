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
import NavMenu from './navMenu'
import Footer from './footer'
import './layout.css'

// @ts-ignore
import { customLayoutStyles } from '../styles/layout.module.css'

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
        <section className={customLayoutStyles.headerSection} >
          <Header siteTitle={siteTitle}/>
        </section>
        
        <section className={customLayoutStyles.navMenuSection}>
          <NavMenu  menuLinks={menuLinks} />
        </section>
        
        <main className={customLayoutStyles.mainContent}>{children}</main>

        <section className={customLayoutStyles.footerSection}>
          <Footer  />
        </section>  
      </div>
    </React.Fragment>
  )
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import customLayoutStyles from "../styles/layout.module.css"
import "./layout.css"

const Layout = ({ children }) => {
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
        <div className={customLayoutStyles.childWrapper}>
          <main className={customLayoutStyles.mainContent}>{children}</main>
          <footer className="footer">
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a> by Brandon Dusch
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

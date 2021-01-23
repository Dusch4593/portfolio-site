import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import headerStyles from "../styles/header.module.css"

const Header = ({ menuLinks }) => {
  return (
    <header className={headerStyles.headerContainer}>
      <div className={headerStyles.navWrapper}>
        <p className={headerStyles.headerTitle}>
          Brandon Dusch
        </p>
        <nav>
          <ul className={headerStyles.navLinkList}>
            
            {menuLinks.map(linkData => (
              <li
                key={linkData.name}
                className={headerStyles.navLinkListItem}
              >
                <Link
                  className={headerStyles.navLink}
                  to={linkData.link}
                  target={linkData.target}
                  rel={linkData.rel}
                >
                  {linkData.name}
                </Link>
              </li>
            ))}
          </ul>
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

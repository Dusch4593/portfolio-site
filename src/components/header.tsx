import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../styles/header.module.css"

const Header = ({ menuLinks }) => {
  return (
    <header className={headerStyles.headerContainer}>
      <div className={headerStyles.navWrapper}>
        <Link 
          className={headerStyles.headerTitle} 
          to={menuLinks[0].link}
          target={menuLinks[0].target}
          rel={menuLinks[0].rel}
        >
          Brandon Dusch
        </Link>
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuLinks }) => (
  <header
    style={{
      background: `#ccdbee`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
        <nav>
          <ul style={{display: 'flex', flex: 1}}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: 'none',
                  padding: '1rem',
                }}
              >
                <Link style={{color: '#5689c7'}} to={link.link} target={link.target} rel={link.rel}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

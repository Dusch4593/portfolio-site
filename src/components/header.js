import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ menuLinks }) => {
  return (
    <header
      style={{
        background: `#ccdbee`,
        position: "fixed",
        width: "100%",
        zIndex: "1",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "0 auto",
            padding: "1rem"
          }}
        >
          Brandon Dusch
        </p>
        <nav>
          <ul
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: "none",
                  padding: "1rem",
                  marginBottom: "0"
                }}
              >
                <Link
                  style={{
                    color: "#5689c7",
                  }}
                  to={link.link}
                  target={link.target}
                  rel={link.rel}
                >
                  
                  {link.name}
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

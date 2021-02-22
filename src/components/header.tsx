import { Link } from "gatsby"
import * as React from "react"

const headerStyles = require("../styles/header.module.css")

export interface HeaderProps {
  className?: string
  siteTitle: string
  menuLinks: Array<{
    name: string 
    link: string
  }>
}

const Header = ({ menuLinks }: HeaderProps) => {

  return (
    <header className={headerStyles.headerContainer}>
      <div className={headerStyles.navWrapper}>
        <Link 
          className={headerStyles.headerTitle} 
          to={menuLinks[0].link}
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

export default Header

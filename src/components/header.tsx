import { Link } from "gatsby"
import * as React from "react"
import { useState, useEffect } from "react"

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

  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClick = (e: any) => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    body.onresize = () => {
      if(window.innerWidth >= 700) {
        setToggleMenu(false)
        document.getElementsByTagName('ul')[0].className = headerStyles.navLinkList
      }
    }
  }, [])

  return (
    <header className={headerStyles.headerContainer}>
        <nav className={headerStyles.navWrapper}>
          <div className={headerStyles.headerTitle}>
            <Link  to={menuLinks[0].link}>
              Brandon Dusch
            </Link>
          </div>
          <div className={headerStyles.hamburgerNavBtn} onClick={handleClick}>
            <span className={headerStyles.hamburgerBar}></span>
            <span className={headerStyles.hamburgerBar}></span>
            <span className={headerStyles.hamburgerBar}></span>
          </div>
          <ul className={toggleMenu ? headerStyles.navLinkListActive : headerStyles.navLinkList}>
            {menuLinks.map((linkData, index) => (
              <li key={index} className={headerStyles.navLinkListItem}>
                <Link className={headerStyles.navLink} to={linkData.link}>
                  {linkData.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  )
}

export default Header

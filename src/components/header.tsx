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

  useEffect(() => {
    const callback = () => {
      const navLinkList: any = document.getElementsByClassName(headerStyles.navLinkList)[0]
      navLinkList.style.display = window.innerWidth <= 700 ? 'none' : 'flex'
    }
    window.addEventListener('resize', callback)
  })
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setToggleMenu(!toggleMenu)
  }

  let open = { display: 'flex' } 
  let close = { display: 'none' }

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
          <ul className={headerStyles.navLinkList} style={toggleMenu ? open : close}>
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

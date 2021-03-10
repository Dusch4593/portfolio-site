import * as React from 'react'
import { Link } from 'gatsby'
// @ts-ignore
import navMenuStyles from '../styles/navMenu.module.css' 

interface NavMenuProps {
    menuLinks: Array<{
        name: string 
        link: string
    }>
}

const NavMenu = ({menuLinks}: NavMenuProps) => {
    return (
        <nav className={navMenuStyles.navWrapper}>
            <ul className={navMenuStyles.navLinkList}>
            {menuLinks.map((linkData, index) => (
                <li key={index} className={navMenuStyles.navLinkListItem}>
                <Link className={navMenuStyles.navLink} to={linkData.link}>
                    {linkData.name}
                </Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default NavMenu
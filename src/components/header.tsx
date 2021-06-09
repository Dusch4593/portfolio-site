import * as React from 'react'
// @ts-ignore
import * as headerStyles from '../styles/header.module.css' 

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <header className={headerStyles.headerContainer}>
      <a href='#about' className={headerStyles.headerTitle}>
        <h1>{siteTitle}</h1>
      </a>
    </header>
  )
}

export default Header

import * as React from 'react'
//@ts-ignore
import { footerStyles } from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            Built with <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener noreferrer'> &hearts; & Gatsby</a>, 
            © {new Date().getFullYear()}
        </footer>
    )
}

export default Footer 
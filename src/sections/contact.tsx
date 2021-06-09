import * as React from 'react'
import SEO from '../components/seo'
import SocialLinks from '../components/socialLinks'

// @ts-ignore
import { contactStyles } from '../styles/contact.module.css'

const Contact = () => {
  
  return (
    <React.Fragment>
      <SEO title='Contact' />
      <h3>Contact</h3>
      <div className={contactStyles.contactWrapper}>
        <p>I'm available for full-time work. Feel free to contact me at brandondusch@gmail.com or through any of the links below</p><br/>
      </div>
      <SocialLinks />
    </React.Fragment>
  )
}
 
export default Contact

import * as React from 'react'
import SEO from '../components/seo'
import SocialLinks from '../components/socialLinks'

// @ts-ignore
import * as contactStyles from '../styles/contact.module.css'
// @ts-ignore
import * as globalStyles from '../styles/globals.module.css'

const Contact = () => {
  
  return (
    <React.Fragment>
      <SEO title='Contact' />
      <h2 className={globalStyles.sectionHeader}>Contact</h2>
      <div className={contactStyles.contactWrapper}>
        <p>I'm available for full-time work. Feel free to contact me at brandondusch@gmail.com or through any of the links below</p><br/>
      </div>
      <SocialLinks />
    </React.Fragment>
  )
}
 
export default Contact

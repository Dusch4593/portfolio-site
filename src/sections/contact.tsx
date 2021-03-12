import * as React from 'react'
import SEO from '../components/seo'

// @ts-ignore
import * as contactStyles from '../styles/contact.module.css'

const Contact = () => {
  
  return (
    <React.Fragment>
      <SEO title='Contact' />
      <div className={contactStyles.contactWrapper}>
        <p>I'm available for part-time and full-time work. Feel free to contact me at brandondusch@gmail.com or through any of the link belows</p><br/>
      </div>
    </React.Fragment>
  )
}
 
export default Contact

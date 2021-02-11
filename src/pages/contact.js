import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'
import ContactLinks from '../components/contactLinks'
import contactStyles from '../styles/contact.module.css'

const Contact = () => {
  
  return (
    <Layout>
      <SEO title="Contact" />
      <p>I'm available for part-time and full-time work. Feel free to contact me through any of the links</p><br/>
      <ContactForm /><br/>
      <ContactLinks />
    </Layout>
  )
}
 
export default Contact

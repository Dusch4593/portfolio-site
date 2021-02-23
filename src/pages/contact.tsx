import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'
import ContactLinks from '../components/contactLinks'

const contactStyles = require('../styles/contact.module.css')

const Contact = () => {
  
  return (
    <Layout>
      <SEO title="Contact" />
      <section>
        <p>I'm available for part-time and full-time work. Feel free to contact me through any of the links</p><br/>
        <ContactForm /><br/>
        <ContactLinks />
      </section>
    </Layout>
  )
}
 
export default Contact

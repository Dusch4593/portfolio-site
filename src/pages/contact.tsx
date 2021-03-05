import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactLinks from '../components/contactLinks'

// @ts-ignore
import * as contactStyles from '../styles/contact.module.css'

const Contact = () => {
  
  return (
    <Layout>
      <SEO title='Contact' />
      <section>
        <p>I'm available for part-time and full-time work. Feel free to contact me at brandondusch@gmail.com or through any of the link belows</p><br/>
        <ContactLinks />
      </section>
    </Layout>
  )
}
 
export default Contact

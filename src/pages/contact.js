import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact-form'

class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <strong>TODO: Add 3 or 4 links for contact/ social media: email, LinkedIn, Twitter, etc..</strong>
        <p>I'm available for part-time and full-time work. Feel free to contact me through any of the links `\n`</p>
        <ContactForm />
      </Layout>
    )
  }
}
 
export default Contact

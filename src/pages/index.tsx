import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../sections/about'
import Portfolio from '../sections/portfolio'
import Blog from '../sections/blog'
import Contact from '../sections/contact'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <section id='about'>
        <About/>
      </section>

      <section id='portfolio'>
        <Portfolio/>
      </section>

      <section id='blog'>
        <Blog/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>
    </Layout>
  )
}

export default IndexPage

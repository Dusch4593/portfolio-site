import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPost from '../components/blog-post'
import {useStaticQuery, graphql} from 'gatsby'
import blogStyles from '../styles/blog.module.css'


const Blog = () => {
  const data = useStaticQuery(graphql`
  query blogQuery {
    allMediumFeedJson {
      edges {
        node {
          id
          title
          date(formatString: "MMMM DD, YYYY")
          link
          thumbnail
        }
      }
    }
  }
  `)

  const blogPosts = data.allMediumFeedJson.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <h2>My Writing on Medium</h2>
      <div className={blogStyles.blogPostWrapper}>
        {blogPosts.map(({node: post}) => 
          <BlogPost key={post.id} title={post.title} date={post.date} link={post.link} thumbnail={post.thumbnail} />
        )}
      </div>
    </Layout>
  )
}

export default Blog

import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPost from '../components/blogPost'
import {useStaticQuery, graphql} from 'gatsby'

const blogStyles = require('../styles/blog.module.css')


const Blog = () => {
  const data = useStaticQuery(graphql`
  query mediumQuery {
    allMediumFeedJson(limit: 4) {
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

    allDevblogPost(limit: 4) {
      edges {
        node {
          title
          id
          slug
          coverImage
          cuid
          dateAdded(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  `)

  const mediumBlogPosts = data.allMediumFeedJson.edges

  const hashnodeBlogPosts = data.allDevblogPost.edges

  

  return (
    <Layout>
      <SEO title="Blog" />
      <h2>My Writing on Medium</h2>
      <div className={blogStyles.blogPostWrapper}>
        {mediumBlogPosts.map(({node: post}: any) => 
          <BlogPost key={post.id} title={post.title} date={post.date} link={post.link} thumbnail={post.thumbnail} />
        )}
      </div>

      <h2>My Writing on Hashnode</h2>
      <div className={blogStyles.blogPostWrapper}>
        {hashnodeBlogPosts.map(({node: post}: any) => 
          <BlogPost key={post.id} title={post.title} date={post.dateAdded} link={`https://blog.mydevdiary.net/${post.slug}-${post.cuid}`} thumbnail={post.coverImage}/>
        )}
      </div>
    </Layout>
  )
}

export default Blog

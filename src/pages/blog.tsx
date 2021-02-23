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

    allSite {
      edges {
        node {
          siteMetadata {
            blogLinks {
              hashnode
              medium
            }
          }
        }
      }
    }
  }
  `)

  const mediumBlogPosts = data.allMediumFeedJson.edges

  const hashnodeBlogPosts = data.allDevblogPost.edges

  const mediumBlogLink = data.allSite.edges[0].node.siteMetadata.blogLinks.medium
  
  const hashnodeBlogLink = data.allSite.edges[0].node.siteMetadata.blogLinks.hashnode

  return (
    <Layout>
      <SEO title="Blog" />
      <section>
        <h2>My Writing on <a href={mediumBlogLink} target='_target' rel='noopener'>Medium</a></h2>
        <div className={blogStyles.blogPostWrapper}>
          {mediumBlogPosts.map(({node: post}: any) => 
            <BlogPost key={post.id} title={post.title} date={post.date} link={post.link} thumbnail={post.thumbnail} />
          )}
        </div>

        <h2>My Writing on <a href={hashnodeBlogLink} target='_target' rel='noopener'>Hashnode</a></h2>
        <div className={blogStyles.blogPostWrapper}>
          {hashnodeBlogPosts.map(({node: post}: any) => 
            <BlogPost key={post.id} title={post.title} date={post.dateAdded} link={`https://blog.mydevdiary.net/${post.slug}-${post.cuid}`} thumbnail={post.coverImage}/>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Blog

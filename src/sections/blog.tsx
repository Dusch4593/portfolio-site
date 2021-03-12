import * as React from 'react'
import SEO from '../components/seo'
import BlogPost from '../components/blogPost'
import {useStaticQuery, graphql} from 'gatsby'

// @ts-ignore
import * as blogStyles from '../styles/blog.module.css'



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
    <React.Fragment>
      <SEO title='Blog' />
      <div className={blogStyles.blogWrapper}>   
        <section id='mediumPostsSection'>
          <h2>My Writing on <a href={mediumBlogLink} target='_target' rel='noopener'>Medium</a></h2>
          <div className={blogStyles.blogPostWrapper}>
            {mediumBlogPosts.map(({node: post}: any) => 
              <BlogPost key={post.id} title={post.title} date={post.date} link={post.link} thumbnail={post.thumbnail} />
            )}
          </div>
        </section>

        <section id='hashnodePostsSection'>
          <h2>My Writing on <a href={hashnodeBlogLink} target='_target' rel='noopener'>Hashnode</a></h2>
          <div className={blogStyles.blogPostWrapper}>
            {hashnodeBlogPosts.map(({node: post}: any) => 
              <BlogPost key={post.id} title={post.title} date={post.dateAdded} link={`https://blog.mydevdiary.net/${post.slug}-${post.cuid}`} thumbnail={post.coverImage}/>
            )}
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Blog

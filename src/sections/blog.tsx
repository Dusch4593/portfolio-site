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

  
  const formatBlogPostLink = (...linkInfo: any[]) => {
    const link = linkInfo[0] 
    const slug = linkInfo[1]
    const cuid = linkInfo[2]
    if(slug && cuid) {
      return `https://blog.mydevdiary.net/${slug}-${cuid}`
    } else {
      return link
    }
  }

  const displayPosts = (posts: any) => {
    return posts.map(({node : post}: any) => {
    
      const postID = post.id 
      const title: string = post.title
      const date: Date = post.date 
      const link = formatBlogPostLink(post.link, post.slug, post.cuid)
      const thumbnail: string = post.thumbnail || post.coverImage

      const props = {
        title, 
        date,
        link,
        thumbnail
      }

      return <BlogPost key={postID} {...props} />
    })
  }

  return (
    <React.Fragment>
      <SEO title='Blog' />
      <div className={blogStyles.blogWrapper}>   
        <section id='mediumPostsSection'>
          <h2>My Writing on <a href={mediumBlogLink} target='_target' rel='noopener'>Medium</a></h2>
          <div className={blogStyles.blogPostWrapper}>
            {displayPosts(mediumBlogPosts)}
          </div>
        </section>

        <section id='hashnodePostsSection'>
          <h2>My Writing on <a href={hashnodeBlogLink} target='_target' rel='noopener'>Hashnode</a></h2>
          <div className={blogStyles.blogPostWrapper}>
            {displayPosts(hashnodeBlogPosts)}
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Blog

import * as React from 'react'
// @ts-ignore
import * as blogPostStyles from '../styles/blog.module.css'

interface BlogPostProps {
  title: string 
  date: Date 
  link: string 
  thumbnail: string
}



const BlogPost = ({ title, date, link, thumbnail }: BlogPostProps) => {
  return(
    < React.Fragment>
      <div className={blogPostStyles.blogPostCard}>
        <img className={blogPostStyles.blogPostImage} src={ thumbnail } alt={ title } />
        <div className={blogPostStyles.blogPostInfo}>
            <a href={link}><h4>{ title }</h4></a>
            <p>Published on: <strong>{date}</strong></p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BlogPost

import React from 'react'
import blogPostStyles from '../styles/blog.module.css'

const BlogPost = ({ title, date, link, thumbnail }) => {
  return(
    <div className={blogPostStyles.blogPostCard}>

        <a href={link}><img className={blogPostStyles.blogPostImage} src={ thumbnail } alt={ title } /></a>

        <div className={blogPostStyles.blogPostInfo}>
            <a href={link}><h2>{ title }</h2></a>
            <p>Published on: <strong>{date}</strong></p>
        </div>
    </div>
  )
}

export default BlogPost

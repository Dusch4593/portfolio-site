import * as React from 'react'
const blogPostStyles = require('../styles/blog.module.css')

interface BlogPostProps {
  title: string 
  date: Date 
  link: string 
  thumbnail: string
}



const BlogPost = ({ title, date, link, thumbnail }: BlogPostProps) => {
  
  return(
    <div className={blogPostStyles.blogPostCard}>
        <a href={link}><img className={blogPostStyles.blogPostImage} src={ thumbnail } alt={ title } /></a>
        <div className={blogPostStyles.blogPostInfo}>
            <a href={link}><h4>{ title }</h4></a>
            <p>Published on: <strong>{date}</strong></p>
        </div>
    </div>
  )
}

export default BlogPost

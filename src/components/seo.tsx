/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string 
  lang?: string 
  meta?: Array<{
    property: string 
    content: any
  }> 
  image?: {
    src: string 
    height: number 
    width: number
  } 
  title: string 
  pathname?: string 
}

function SEO({ description='', lang='en', meta=[], image: metaImage, title, pathname }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageSrcString = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical ? [{ rel: "canonical", href: canonical,},] : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(',')
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: 'og:image',
                  content: imageSrcString
                },
                {
                  property: 'og:image:width',
                  content: metaImage.width
                },
                {
                  property: 'og:image:height',
                  content: metaImage.height
                },
                {
                  property: 'twitter:card',
                  content: 'summary_large_image'
                },
              ]
            : [
                {
                  property: 'twitter:card',
                  content: 'summary'
                },
              ]
        ).concat(meta)}
    />
  )
}

export default SEO

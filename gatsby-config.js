module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data'
      }
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./data/images/brandon_dusch_profile_image.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-medium-feed',
      options: {
        userName: '@brandondusch',
        name: 'MediumFeed'
      }
    },
    {
      resolve: 'gatsby-source-hashnode-devblog',
      options: {
        username: 'Dusch4593',
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    title: `Brandon Dusch`,
    menuLinks: [
      {
        name: 'home',
        link: '#about',
      },
      {
        name: 'portfolio',
        link: '#portfolio',
      },
      {
        name: 'blog',
        link: '#blog',
      },
      {
        name: 'contact',
        link: '#contact',
      },
    ],
    description: `Portfolio site powered by Gatsby. Showcase for software engineering projects.`,
    author: `Brandon Dusch`,
    keywords: ['software engineer', 'software developer', 'web developer', 'frontend', 'fullstack'],
    socialLinks: {
      github: 'https://github.com/Dusch4593', 
      linkedin: 'https://www.linkedin.com/in/brandon-dusch-7818b966/', 
      twitter: 'https://twitter.com/BrandonDusch'
    },
    blogLinks: {
      medium: "https://brandondusch.medium.com/",
      hashnode: "https://blog.mydevdiary.net/"
    }
  },
}

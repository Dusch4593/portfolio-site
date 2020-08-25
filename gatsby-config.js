module.exports = {
  siteMetadata: {
    title: `Brandon Dusch, Software Engineer - Official Portfolio Website`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'portfolio',
        link: '/portfolio',
      },
      {
        name: 'blog',
        link: '/blog',
      },
      {
        name: 'contact',
        link: '/contact',
      },
    ],
    description: `Portfolio site powered by Gatsby. Showcase for software engineering projects.`,
    author: `Brandon Dusch`,
    keywords: ['software engineer', 'software developer', 'web developer', 'portfolio', 'projects']
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data'
      }
    },
    'gatsby-transformer-json',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        icon: `./src/images/favicon_portfolio_site_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

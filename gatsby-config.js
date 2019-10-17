module.exports = {
  siteMetadata: {
    title: `Gabriel Dean Olivar`,
    description: `A digital designer portfolio website by Gabriel Dean Olivar. Work ranging from UX, graphic design, front-end development and branding.`,
    author: `@gatsbyjs`,
  },
  plugins: [
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
        name: `gabriel-dean-olivar-portfolio`,
        short_name: `gdo-portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2a2a2a`,
        display: `minimal-ui`,
        icon: `src/images/my_icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

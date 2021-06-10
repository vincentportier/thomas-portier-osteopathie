module.exports = {
  siteMetadata: {
    title: `Thomas Portier Ostéopathe Noyal sur Vilaine`,
    description: `Thomas Portier, Ostéopathe titulaire d'un diplôme d'état exerce à Noyal sur Vilaine à 15 minutes de Rennes. Réservation au 06 37 12 04 85.`,
    author: `Vincent Portier - https://vportier.com`,
    siteUrl: "https://osteo-rennes.com",
    image: "/og.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        background_color: `#FFFFFF`,
        theme_color: `#0696de`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "UA-188933560-2",
        head: true,
      },
    },
  ],
}

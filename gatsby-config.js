module.exports = {
  
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Movies`,
        path: `${__dirname}/src/data`,
      },
    },
  ],

  siteMetadata: {
    title: "Netnet",
    url: "https://mrbanano.github.io/Netnet/", // URI
    description: "Clon de netflix",
    twitterUsername: "666alvaro",
    titleTemplate:"https://mrbanano.github.io/Netnet/Browser",
    defaultImage:"https://repository-images.githubusercontent.com/389449702/a03a504f-e1c3-4fe5-a279-2147984214d9",
    image:"https://repository-images.githubusercontent.com/389449702/a03a504f-e1c3-4fe5-a279-2147984214d9",
  }
}

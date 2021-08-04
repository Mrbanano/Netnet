
exports.createPages = async ({ actions, graphql }) => {
    const { allSeriesJson, allMoviesJson } = (await graphql(`
      {
        allSeriesJson{
            nodes {
          id
          title
          slug
        }
      }
      allMoviesJson {
        nodes {
          id
          title
          slug
        }
      }
      }
    `)).data;

    allMoviesJson.nodes.forEach((movie) => {
        actions.createPage({
            path: `Movie/${movie.slug}`,
            component: require.resolve("./src/templates/Detail.jsx"),
            context: {
                id: movie.id
            }
        })
    })
  
    allSeriesJson.nodes.forEach((serie) => {
        actions.createPage({
            path: `Serie/${serie.slug}`,
            component: require.resolve("./src/templates/Detail.jsx"),
            context: {
                id: serie.id
            }
        })
    })
    

}
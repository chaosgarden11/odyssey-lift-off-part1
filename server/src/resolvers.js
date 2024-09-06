const resolvers = {
    Query: {
        // returns an array of Tracks to populate homepage grid
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId)
        }
    }
}

module.exports = resolvers;
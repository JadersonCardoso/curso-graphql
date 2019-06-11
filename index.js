const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    # Pontos de entrada da sua API!
    type Query {
        ola: String
    }
`
const resolvers = {
    Query: {
        ola() {
            return 'Primeira Query com retorno de uma String!'
        }
    }
}

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Exceutando em ${url}`)
})
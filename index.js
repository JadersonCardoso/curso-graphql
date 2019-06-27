const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    # Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: Date
    }
`
const resolvers = {
    Query: {
        ola() {
            return 'Primeira Query com retorno de uma String!'
        },
        horaCerta() {
            return new Date
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
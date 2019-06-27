const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    #criando tipo usuario
    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: Date
        usuarioLogado: Usuario
    }
`
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Query: {
        ola() {
            return 'Primeira Query com retorno de uma String!'
        },
        horaCerta() {
            return new Date
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: 'Ana da Web',
                email: 'anadaweb@email.com',
                idade: 23,
                salario_real: 125.56,
                vip: true
            }
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
const {ApolloServer, gql } = require('apollo-server')

const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29
},{
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31
},{
    id: 3,
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24
}]

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

    #Criando tipo produto para o dasafio
    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
    }
`
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Produto:{
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco * ( 1 - produto.desconto)
            } else {
                return produto.preco
            }
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
        },
        produtoEmDestaque() {
            return {
                nome: 'Camisa Gamer',
                preco: 56.00,
                desconto: 0.5
            }
        },
        numerosMegaSena() {
            const crescente = (a, b) => a - b
            return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
        },
        usuarios() {
            return usuarios
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
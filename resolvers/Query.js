const { usuarios, perfis } = require('../data/db')

module.exports = {
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
    },
    usuario(_, { id }) {
        const sels = usuarios.filter(u =>u.id === id)
        return sels ? sels[0] : null
    },
    perfis(){
         return perfis
    },
    perfil(_, { id }) {
        const sels = perfis.filter(p => p.id === id)
        return sels ? sels[0] : null
    }

}
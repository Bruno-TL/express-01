const produtos = [
    {
        "id": 1,
        "nome": "produto 1"
    },
    {
        "id":2,
        "nome": "produto 2"
    }
]



function listar() {
    return JSON.stringify(produtos)
}

function criar(p) {
    produtos.push(p)
    return produtos
}

function atualizar() {
    return 'Atualizar produto'
}

function deletar(p_id) {
    let filtrados = produtos.filter( prod => prod.id != p_id)
    return filtrados
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar,
}
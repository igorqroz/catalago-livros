const url = 'https://livros.acilab.com.br/api/livros'

function buscarLivros() {
    fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {
            console.log("Sucesso! os livros chegaram", dados);
        })
        .catch(erro => {
            console.log("Erro ao buscar livros", erro);
        })
}
buscarLivros()
const url = 'https://livros.acilab.com.br/api/livros'

function buscarLivros() {
    fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {
            console.log("Sucesso! os livros chegaram", dados);
            const tabela = document.getElementById('tabela-livros')
            tabela.innerHTML = '';
            dados.forEach(livro => {
                tabela.innerHTML += `
                <tr>
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                `
            });
        })
        .catch(erro => {
            console.log("Erro ao buscar livros", erro);
        })
}
buscarLivros()

const formLivro = document.getElementById('form-livro')

formLivro.addEventListener('submit', function (event) {
    event.preventDefault

    const tituloDigitado = document.getElementById('titulo-livro')
    const autorDigitado = document.getElementById('nome-autor')

    const novoLivro = {
        titulo: tituloDigitado,
        autor: autorDigitado
    }

    const opcoesDaRequisicao = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoLivro)
    };

    fetch(url, opcoesDaRequisicao)
        .then(resposta => {
            if (resposta.ok) {
                console.log("Livro salvo com sucesso no servidor!");
            }
        })
        .catch(erro => console.error("Erro ao tentar salvar o livro:", erro));
});
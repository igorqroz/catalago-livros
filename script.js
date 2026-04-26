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
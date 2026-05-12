<<<<<<< HEAD
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
=======
const url = "https://livros.acilab.com.br/api/livros";

function buscarLivros() {
  fetch(url)
    .then((resposta) => resposta.json())
    .then((dados) => {
      const tabela = document.getElementById("tabela-livros");
      tabela.innerHTML = "";
      dados.forEach((livro) => {
        tabela.innerHTML += `
                <tr>
                    <td>${livro.titulo}</td>
                    <td>${livro.autor}</td>
                    <td><button onclick="prepararEdicao(${livro.id}, '${livro.titulo}', '${livro.autor}')">Editar</button>
                    <button onclick="excluirLivro(${livro.id})">Excluir</button></td>
                </tr>
                `;
      });
    })
    .catch((erro) => {
      console.log("Erro ao buscar livros", erro);
    });
}
buscarLivros();

const formLivro = document.getElementById("form-livro");

formLivro.addEventListener("submit", function (event) {
  event.preventDefault();

  const tituloDigitado = document.getElementById("titulo-livro").value;
  const autorDigitado = document.getElementById("nome-autor").value;
  const idDoLivro = document.getElementById("livro-id").value;

  const novoLivro = {
    titulo: tituloDigitado,
    autor: autorDigitado,
  };

  if (idDoLivro == "") {
    const opcoesPOST = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoLivro),
    };

    fetch(url, opcoesPOST)
      .then((resposta) => {
        if (resposta.ok) {
          console.log("Livro CRIADO com sucesso!");
          buscarLivros();
          formLivro.reset();
        }
      })
      .catch((erro) => console.error("Erro ao tentar CRIAR o livro:", erro));
  } else {
    const opcoesPUT = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoLivro),
    };

    const urlAtualizar = `https://livros.acilab.com.br/api/livros/${idDoLivro}`;

    fetch(urlAtualizar, opcoesPUT)
      .then((resposta) => {
        if (resposta.ok) {
          console.log("Livro ATUALIZADO com sucesso!");
          buscarLivros();

          formLivro.reset();
          document.getElementById("livro-id").value = "";
        }
      })
      .catch((erro) =>
        console.error("Erro ao tentar ATUALIZAR o livro:", erro),
      );
  }
});

function excluirLivro(id) {
  console.log("Tentando apagar o livro com o ID:", id);
  const urlDeletar = `https://livros.acilab.com.br/api/livros/${id}`;

  fetch(urlDeletar, {
    method: "DELETE",
  })
    .then((resposta) => {
      if (resposta.ok) {
        buscarLivros();
      }
    })
    .catch((erro) => console.error("Erro ao apagar:", erro));
}

function prepararEdicao(id, titulo, autor) {
  document.getElementById("titulo-livro").value = titulo;
  document.getElementById("nome-autor").value = autor;
  document.getElementById("livro-id").value = id;
}
>>>>>>> origin/master

# Catálogo de Livros API

Este é um projeto de estudo desenvolvido para colocar em prática os fundamentos do desenvolvimento Web: **HTML5, CSS3 e JavaScript Moderno (ES6+)**. 

A aplicação consome uma API real para gerenciar um catálogo de livros, permitindo realizar todas as operações de um **CRUD** (Create, Read, Update, Delete).

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização profissional com foco em usabilidade (UI/UX).
- **JavaScript (ES6):** Lógica de programação, manipulação do DOM e chamadas assíncronas.
- **Fetch API:** Interface para requisições HTTP (GET, POST, PUT, DELETE).

## Funcionalidades

- **Listar Livros:** Busca e exibe todos os livros cadastrados na API em uma tabela dinâmica.
- **Adicionar Livro:** Formulário para cadastro de novos títulos e autores.
- **Editar Livro:** Permite carregar os dados de um livro existente de volta ao formulário para atualização.
- **Excluir Livro:** Remove um livro específico do banco de dados através do seu ID único.

## Como funciona a lógica (Visão Técnica)

O projeto utiliza o conceito de **Single Page Application (SPA)** simplificada, onde as atualizações da interface ocorrem sem o recarregamento total da página.

1.  **Consumo de API:** Utilizamos funções assíncronas com `fetch` para comunicar com o servidor.
2.  **Identificação via Hidden Input:** Um campo oculto (`input type="hidden"`) é usado para armazenar o ID do livro durante a edição, permitindo que o formulário decida entre uma rota de `POST` ou `PUT`.
3.  **Manipulação do DOM:** Injeção dinâmica de conteúdo na tabela utilizando *Template Literals*.

## Como Executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. (Opcional) Utilize a extensão **Live Server** do VS Code para uma melhor experiência de desenvolvimento.

## API Utilizada

A aplicação consome a seguinte API:
`https://livros.acilab.com.br/api/livros`

---
Desenvolvido por: Igor Queiroz dos Santos Lima   
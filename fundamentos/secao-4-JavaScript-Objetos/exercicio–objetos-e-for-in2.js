let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//1 - retorna frase

console.log("O livro favorito de "+leitor.nome+" "+leitor.sobrenome+" se chama '"+leitor.livrosFavoritos[0].titulo+"'");

//2 - adiciona livro

leitor.livrosFavoritos.push ({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});
//console.log(leitor.livrosFavoritos);

//3 - retorna quantidade de favoritos

console.log(leitor.nome+" tem "+leitor.livrosFavoritos.length+" livros favoritos");
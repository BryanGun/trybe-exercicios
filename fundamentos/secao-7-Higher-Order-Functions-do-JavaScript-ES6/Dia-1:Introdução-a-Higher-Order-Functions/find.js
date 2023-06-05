// Exibe o primeiro numero % por 3 e 5

const numbers = [19, 21, 30, 3, 45, 22, 15];

const encontraNumero = numbers.find((element) => element % 3 === 0 && element % 5 === 0);
  console.log(encontraNumero);

// Exibe o primeiro nome com cinco letras

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const encontraNome = names.find((element) => element.length === 5)
  console.log(encontraNome);

// Exibe musica com o id 31031685

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const encontraMusica = musicas.find((element) => element.id === '31031685');
  console.log(encontraMusica);
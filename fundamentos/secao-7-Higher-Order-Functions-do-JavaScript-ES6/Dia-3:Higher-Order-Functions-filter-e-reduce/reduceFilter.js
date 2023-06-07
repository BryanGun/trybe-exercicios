const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numeroPar = (number) => number % 2 === 0;
const soma = (accumulator, number) => accumulator + number;

const somaPar = (array) => array.filter(numeroPar).reduce(soma);

console.log(somaPar(numbers));
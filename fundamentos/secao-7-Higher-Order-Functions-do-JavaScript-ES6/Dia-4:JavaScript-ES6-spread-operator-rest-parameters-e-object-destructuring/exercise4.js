/*Exercício 4
Escreva uma função filterPeople que, dada uma lista de pessoas, 
retorna todas as pessoas australianas que nasceram no século 20:
*/

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
  // seculo20: 1901-2000 
];

// escreva filterPeople abaixo
const filterPeople = (arr) => {
  return people.filter(({nationality, bornIn}) => {
    return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
  })
}

const retorno = filterPeople;
console.log(retorno());



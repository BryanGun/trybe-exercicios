const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
//const expectedResult = 20;
const letrasArrays = names.join('').toLowerCase().split('');
const countA = () => {
  return letrasArrays.reduce((acc, curr) => {
    return curr === 'a' ? acc += 1 : acc;
  }, 0);
}

//console.log(letrasArrays);

const letrasA = countA();
console.log(letrasA);

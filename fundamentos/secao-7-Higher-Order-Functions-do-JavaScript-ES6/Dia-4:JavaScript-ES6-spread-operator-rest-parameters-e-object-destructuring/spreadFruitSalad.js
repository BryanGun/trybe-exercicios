// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'abacaxi', 'kiwi'];

const fruitSalad = (fruit, additional) => {
  const fruitSaladWithAdditional = [...fruit, ...additional];
  return fruitSaladWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));
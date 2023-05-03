let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSoma = 0;

for (let percorrer = 0; percorrer < numbers.length; percorrer +=1) {
  console.log(numbers[percorrer])
  resultadoSoma += numbers[percorrer];
  console.log('Resultado da Soma: ' + resultadoSoma);
  let media = resultadoSoma / numbers.length;
  console.log('Media dos numeros: ' + media);
  let maiorNumero = numbers [0];
  let menorNumero = numbers [0];


  if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
  } else {
    console.log('O valor da média aritmética é menor ou igual a 20');
  }


  for (let percorrer2 = 1; percorrer2 < numbers.length; percorrer2 += 1){
    if (numbers[percorrer2] > maiorNumero) {
      maiorNumero = numbers[percorrer2];
    }
  }
    console.log('Maior numero: ' + maiorNumero);


    for (let percorrer3 = 1; percorrer3 < numbers.length; percorrer3 += 1){
      if (numbers[percorrer3] < menorNumero) {
        menorNumero = numbers[percorrer3];
      }
    }
      console.log('Menor numero: ' + menorNumero);

}

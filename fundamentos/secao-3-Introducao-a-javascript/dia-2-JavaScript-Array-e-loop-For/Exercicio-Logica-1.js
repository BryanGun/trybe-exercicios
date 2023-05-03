let fatorial = 1;
let word = 'tryber';
let invertido = '';
let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array[0];
let maior = array[0];
let maiorPrimo = 0;

for (let percorre = 10; percorre > 0; percorre -= 1) {
    fatorial *= percorre;
  }
  
  console.log(fatorial);

  for (let percorre2 = 0; percorre2 < word.length; percorre2 += 1) {
    invertido += word[word.length - 1 - percorre2];
  }
  
  console.log(invertido);

for (let percorre3 = 1; percorre3 < array.length; percorre3 += 1) {
    if (array[percorre3].length > maior.length) {
        maior = array[percorre3];
    }
}

for (let percorre4 = 1; percorre4 < array.length; percorre4 += 1) {
    if (array[percorre4].length < menor.length) {
      menor = array[percorre4];
    }
  }

console.log(maior);
console.log(menor);

for (let percorre5 = 2; percorre5 <= 50; percorre5 += 1) {
    let primo = true;
    for (let percorre6 = 2; percorre6 < percorre5; percorre6 += 1) {
      if (percorre5 % percorre6 === 0) {
        primo = false;
      }
    }
    if (primo) {
      maiorPrimo = percorre5;
    }
  }

  console.log(maiorPrimo);
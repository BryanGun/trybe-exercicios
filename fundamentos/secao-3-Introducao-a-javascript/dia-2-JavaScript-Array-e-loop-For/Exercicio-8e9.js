let numeros = [];

for (let percorre = 1; percorre <= 25; percorre += 1) {
  numeros.push(percorre);
}

console.log(numeros);

for (let percorre2 = 0; percorre2 < numeros.length; percorre2 += 1) {
  console.log(numeros[percorre2] / 2);
}
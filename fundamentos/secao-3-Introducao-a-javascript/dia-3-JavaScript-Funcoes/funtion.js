let saldo = 10;

function adicionaValor(valor) {
  return saldo + valor;
}

function subtraiValor(valor) {
  return saldo - valor;
}

function multiplicaValor(valor) {
  return saldo * valor;
}

function divideValor(valor) {
  return saldo / valor;
}

console.log(adicionaValor(10));
console.log(subtraiValor(5));
console.log(multiplicaValor(3));
console.log(divideValor(3));
const sorteio = (aposta, resultado) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  return resultado(aposta, numeroSorteado) ? 'Parabéns, você ganhou!' : 'Tente novamente';
}

const aposta = (numeroApostado, numeroSorteado) => {
  return numeroApostado === numeroSorteado;
}

const meuNumero = 3;
const final = sorteio(meuNumero, aposta);
console.log(final);
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente) {
  if (typeof cliente === 'string'){
    clientesTrybeBank.push(cliente);
    return 'Cliente '+ cliente +' Adicionado(a)'
  } else {
    return 'Erro';
  }
}

console.log(adicionaCliente(1));
console.log(adicionaCliente('Jose'));
console.log(clientesTrybeBank);
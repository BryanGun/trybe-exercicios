let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function deletaCliente(cliente) {
  let clienteValido = false;
  if (typeof cliente === 'string'){
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice (index, 1);
        clienteValido = true
        return 'Cliente '+ cliente +' Removido(a)'
      }
      
    } 

    if (clienteValido === false) {
      return 'Cliente não Valido(a)'
    }
  } else {
    return 'Erro';
  }
}

console.log(deletaCliente(1));
console.log(deletaCliente('jose'));
console.log(deletaCliente('Gus'));
console.log(clientesTrybeBank);
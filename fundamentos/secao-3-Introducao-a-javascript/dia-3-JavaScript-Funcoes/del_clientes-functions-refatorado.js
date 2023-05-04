let clientesTrybeBank = ['Ada', 'John', 'Gus'];

/*function deletaCliente(cliente) {
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
    return 'Entrada deve ser string';
  }
}*/


function clienteValido(cliente) {
  if (typeof cliente === 'string') {
    return true;
  } else {
    return 'Entrada deve ser string';
  }
}
function percorreCliente(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function deletaCliente(cliente) {
  let validacao = clienteValido(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = percorreCliente(cliente);
  if (index === false) {
    return 'Cliente não Valido(a)'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente '+ cliente +' Removido(a)';
}

console.log(deletaCliente(1));
console.log(deletaCliente('jose'));
console.log(deletaCliente('Gus'));
console.log(clientesTrybeBank);
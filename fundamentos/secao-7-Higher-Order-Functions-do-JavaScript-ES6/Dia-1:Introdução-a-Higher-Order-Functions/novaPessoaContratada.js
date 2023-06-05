const geraFuncionario = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().replace(' ', '_');
  return { nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), 
    id2: callBack('Luiza Drumond'), 
    id3: callBack('Carla Paiva'), 
  }
  return employees;
};

console.log(newEmployees(geraFuncionario));

const areaCirculo = (raio) => {
  const pi = 3.14;

  if(typeof raio !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }

  let area = pi * (raio ** 2);
  return `Esta é a área do círculo: ${area}`;
};

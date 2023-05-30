function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  const sortedTechs = techs.sort();
  const result = sortedTechs.map(tech => ({ tech, name }));

  return result;
}

module.exports = techList;
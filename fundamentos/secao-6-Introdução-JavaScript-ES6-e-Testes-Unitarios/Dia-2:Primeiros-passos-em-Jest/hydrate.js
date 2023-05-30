const hydrate = (string) => {
  const splitString = string.split('');
  let quantidade = 0;
  for (let index = 0; index < splitString.length; index += 1){
    let parse = parseInt(splitString[index]);
    if (!isNaN(parse)){
      quantidade += parse;
}
  }
  let copo = 'copo';
  if (quantidade > 1){
    copo = 'copos'
  }
  return quantidade + ' ' + copo + ' de água';
};

module.exports = hydrate;

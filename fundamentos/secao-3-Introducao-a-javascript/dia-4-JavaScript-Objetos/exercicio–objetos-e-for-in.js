let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


//1 - Imprime nome
console.log("Bem vinda, "+info.personagem);

//2 - inseri propriedade
info.recorrente = 'sim';
console.log(info);

//3 - mostra chaves
for (let objeto in info){
  console.log(objeto);
}

//4 - mostra valores
for (let valor in info){
  console.log(info[valor]);
}

//5 - cria segundo objeto

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
};

info2.recorrente = 'sim';
console.log(info2);

for (let verificaRecorrente in info) {
  if (
    verificaRecorrente === 'recorrente' &&
    info[verificaRecorrente] === 'sim' &&
    info2[verificaRecorrente] === 'sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[verificaRecorrente] + ' e ' + info2[verificaRecorrente]);
  }
}
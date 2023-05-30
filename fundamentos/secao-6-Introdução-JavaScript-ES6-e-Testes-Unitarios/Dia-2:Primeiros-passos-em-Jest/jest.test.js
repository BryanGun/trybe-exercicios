const removeItem = require('./removeItem');
const myFizzBuzz = require('./myFizzBuzz');
const {encode, decode} = require('./encodeDecode');
const techList = require('./techList');
const hydrate = require('./hydrate');


describe('removeItem', () => {

  it('retorna array sem o 3', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('nao retorna array 1, 2, 3, 4', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('retorna array [1, 2, 3, 4]', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
  
});

describe('myFizzBuzz', () => {

  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Caso num seja um número divisível apenas por 3, a função retorna "fizz".', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it('Caso num seja um número divisível apenas por 5, a função retorna "buzz".', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
  it('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('7')).toBeFalsy();
  })
});

describe('encode e decode', () =>{

  it('Testa se encode e decode são funções.', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  })

  it('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  })

  it('teste se as numeros 1, 2, 3, 4, 5 são convertidas em a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  })

  it('teste se o numero demais encode', () => {
    expect(encode('a, e, i, o, u')).not.toEqual('6, 7, 8, 9, 10');
  })

  it('teste se o numero demais decode', () => {
    expect(decode('6, 7, 8, 9, 10')).not.toEqual('a, e, i, o, u');
  })

  it('teste de string decode', () => {
    expect(decode('1, 2, 3, 4, 5').length).toEqual(13);
  })

  it('teste de string encode', () => {
    expect(encode('1, 2, 3, 4, 5').length).toEqual(13);
  })

})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
  
});

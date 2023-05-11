let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  // Adicione abaixo as informações necessárias.

  let entregador = order.order.delivery.deliveryPerson;
  let nomeCliente = order.name;
  let telefoneCliente = order.phoneNumber;
  let enderecoRuaCliente = order.address.street;
  let enderecoNumeroCliente = order.address.number;
  let enderecoApCliente = order.address.apartment;

  //console.log("Olá, "+order.order.delivery.deliveryPerson+", entrega para: "+order.order.name+", Telefone: "+order.order.phoneNumber+", R. "+order.order.address[0]+", Nº: "+order.order.address[1]+", AP: "+order.order.address[2]);
  console.log("Olá, "+entregador+", entrega para: "+nomeCliente+", Telefone: "+telefoneCliente+", R. "+enderecoRuaCliente+", Nº: "+enderecoNumeroCliente+", AP: "+enderecoApCliente);
}

customerInfo(order);

function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
  let novoCliente = order.name = 'Luiz Silva';
  let novoTotal = order.payment.total = 50;
  let pizza = Object.keys(order.order.pizza);
  let bebida = order.order.drinks.coke.type;
  

  console.log("Olá, "+novoCliente+" o valor total de seu pedido de "+pizza[0]+", "+pizza[1]+" e "+bebida+" é R$ "+novoTotal+",00.");
}

orderModifier(order);

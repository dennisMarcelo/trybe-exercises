const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (order) => {
  const name = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const numbet = order.address.number;
  const ap = order.address.apartment;
  const nameOrder = order.order.delivery.deliveryPerson;
  
  return `Olá ${nameOrder}, entrega para: ${name}, Telefone: ${phone}, ${street}, Nº: ${numbet}, AP: ${ap}.`
}

customerInfo(order);

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva',
  order.payment.total = 50;

  const nameOrder = order.order.delivery.deliveryPerson;
  const pizzas = (Object.keys(order.order.pizza)).join(', ');
  const drinks = order.order.drinks.coke.type;
  const total = order.payment.total;

  return `Olá ${nameOrder},o total do seu pedido de ${pizzas} e ${drinks} é R$ ${total}.`

}

console.log(orderModifier(order));
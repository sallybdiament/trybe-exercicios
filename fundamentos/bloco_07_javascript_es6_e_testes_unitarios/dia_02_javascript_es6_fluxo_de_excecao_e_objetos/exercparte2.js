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
        marguerita: {
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
      total: 60,
    },
  };
  
  console.log();

  const customerInfo = (order) => {
   return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, R. ${order.address.street}, n: ${order.address.number}, ap: ${order.address.apartment}.`
  }
  
  console.log(customerInfo(order));
 
  
  const orderModifier = (order) => {
    const newBuyer = order.name = 'Luiz Silva';
    const valor = order.payment.total = 50;
    const saborPizzas = Object.keys(order.order.pizza);
console.log(`Olá ${newBuyer}, o total do seu pedido de ${saborPizzas[0]}, ${saborPizzas[1]} e ${order.order.drinks.coke.type} é R$ ${valor},00.`);
  }
  
  orderModifier(order);
import Client from './Client';
import ItemOrdered from './ItemOrdered';

class Order {
  private _client: Client;
  private _items: ItemOrdered[] = [];
  private _paymentMethod: string;
  private _discount = 0;
  constructor(
    client: Client,
    items: ItemOrdered[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client { return this._client; }
  set client(value: Client) { this._client = value; }

  get items(): ItemOrdered[] { return this._items; }
  set items(value: ItemOrdered[]) { this._items = value; }

  get paymentMethod(): string { return this._paymentMethod; }
  set paymentMethod(value: string) { this._paymentMethod = value; }

  get discount(): number { return this._discount; }
  set discount(value: number) { this._discount = value; }

  totalOrder(): number {
    return this.items.reduce((acc, item) => {
      const total = acc + item.itemPrice;
      return total;
    }, 0);
  }

  totalWithDiscount(): number {
    const total = this.totalOrder();
    return total * (1 - this.discount);
  }
}

const myOrder = new Order(
  new Client('Joao'), 
  [new ItemOrdered('pizza', 10), new ItemOrdered('pao', 5)], 
  'dinheiro', 
  0.2,
);
console.log(myOrder);

const client = new Client('João');

const sandwich = new ItemOrdered('Sanduíche Natural', 5.00);
const juice = new ItemOrdered('Suco de Abacaxi', 5.00);
const dessert = new ItemOrdered('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('valor normal', order.totalOrder());
console.log('valor com desconto', order.totalWithDiscount());
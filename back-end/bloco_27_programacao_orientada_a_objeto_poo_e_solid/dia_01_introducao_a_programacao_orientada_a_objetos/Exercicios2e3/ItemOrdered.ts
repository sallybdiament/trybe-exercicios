class ItemOrdered {
  private _itemName: string;
  private _itemPrice: number;
  constructor(itemName: string, itemPrice: number) {
    this._itemName = itemName;
    this._itemPrice = itemPrice; 
  }

  get itemName(): string { return this._itemName; }
  set itemName(value: string) { this._itemName = value; }

  get itemPrice(): number { return this._itemPrice; }
  set itemPrice(value: number) { this._itemPrice = value; }
}

export default ItemOrdered;
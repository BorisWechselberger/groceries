import { Component } from '@angular/core';

interface IGroceryItem {
  name: string;
  price: number;
  quantity: number;
  discount?: string;
}

class GroceryItem {

  name: string;
  price: number;
  quantity: number;
  discount?: string;

  constructor(item: IGroceryItem) {
    this.name = item.name;
    this.price = item.price;
    this.quantity = item.quantity || 0;
    this.discount = item.discount;
  }

  get Total() {
    switch (this.discount) {
      case '3for2':
        return Math.floor(this.quantity / 3) * 2 * this.price + (this.quantity % 3) * this.price;

      default:
        return this.quantity * this.price;
    }
  }

  increaseQuantity = () => {
    this.quantity += 1;
  };

  decreaseQuantity = () => {
    if(this.quantity > 0) {
      this.quantity -= 1;
    }
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Aunt Emma\'s Fine Foods';

  basket: GroceryItem[] = [
    {
      name: 'Apple',
      price: 25
    },
    {
      name: 'Orange',
      price: 30
    },
    {
      name: 'Banana',
      price: 15
    },
    {
      name: 'Papaya',
      price: 50,
      discount: '3for2'
    }
  ].map((item: IGroceryItem) => new GroceryItem(item));

  get TotalBasketPrice() {
    return this.basket.reduce((a,b) => a+b.Total, 0)
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@jl/core-data';

@Component({
  selector: 'jl-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  displayedColumns = ['index', 'item', 'quantity'];

  _items: Item;

  @Input() set items(items: Item) {
    if (items) {
      this._items = items;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

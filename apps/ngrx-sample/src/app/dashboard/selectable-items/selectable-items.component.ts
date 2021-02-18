import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '@jl/core-data';

@Component({
  selector: 'jl-selectable-items',
  templateUrl: './selectable-items.component.html',
  styleUrls: ['./selectable-items.component.scss'],
})
export class SelectableItemsComponent implements OnInit {
  _item: Item;

  @Input() set item(item: Item) {
    if (item) {
      this._item = item;
    }
  }

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() addToCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDecrement(item: Item) {
    console.log(item);
    if(item.quantity <= 0) {
      return;
    }
    item.quantity = item.quantity - 1;
    this.decrement.emit(item);
  }

  onIncrement(item: Item) {
    console.log(item);
    item.quantity = item.quantity + 1;
    this.increment.emit(item);
  }

  onAddToCart(item) {
    item.quantity = 1;
    this.addToCart.emit(item);
  }
}

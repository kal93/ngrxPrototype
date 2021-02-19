import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '@jl/core-data';
import { AddNewItemToCart, DecreaseQty, IncreaseQty, LoadCartItems, LoadDashBoardItems, selectDashBoardState } from '@jl/core-state';
import { select, Store } from '@ngrx/store';
import { RemoveItemFromCart } from 'libs/core-state/src/lib/dashboard/dashboard.actions';
import { DashBoardState, initialItems } from 'libs/core-state/src/lib/dashboard/dashboard.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'jl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items$ : Observable<Item[]>;
  cartItems$: Observable<Item[]>;

  constructor(private store: Store<DashBoardState>, private itemService: ItemService) {
    this.items$ = store.pipe(
      select(selectDashBoardState),
      // map((data: any) => data.entities),
      // map((data: any )=> Object.keys(data).map(k => data[k]))
      map((state: any) => state.items) // unable to strongly type state parameter to DashBoardState
      );
      this.cartItems$ = store.pipe(
        select(selectDashBoardState),
      //   map((data: any) => data.entities),
      // map((data: any )=> Object.keys(data).map(k => data[k]))
        map((state: any) => state.cartItems) // unable to strongly type state parameter to DashBoardState
        );
  }

  ngOnInit(): void {
    this.loadDashBoardItems();
    this.loadCartItems();
  }

  loadCartItems() {
    this.store.dispatch(new LoadCartItems());
  }

  loadDashBoardItems() {
    this.store.dispatch(new LoadDashBoardItems())
  }

  addNewItemToCart(event) {
    this.store.dispatch(new AddNewItemToCart(event));
  }

  removeItemFromCart(event) {
    this.store.dispatch(new RemoveItemFromCart(event));
  }

  increaseQty(event) {
    this.store.dispatch(new IncreaseQty(event));
  }

  decreaseQty(event) {
    this.store.dispatch(new DecreaseQty(event));
  }
}

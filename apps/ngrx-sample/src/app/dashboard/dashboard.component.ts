import { Component, OnInit } from '@angular/core';
import { Item } from '@jl/core-data';
import { select, Store } from '@ngrx/store';
import { DashBoardState } from 'libs/core-state/src/lib/dashboard/dashboard.reducer';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
// import { DashBoardState } from '@jl/core-state'
@Component({
  selector: 'jl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items$ : Observable<Item[]>;
  cartItems$: Observable<Item[]>;

  constructor(private store: Store<DashBoardState>) {
    this.items$ = store.pipe(
      select('items'),
      map((state: any) => state.items) // unable to strongly type state parameter to DashBoardState
      );
      this.cartItems$ = store.pipe(
        select('items'),
        map((state: any) => state.cartItems) // unable to strongly type state parameter to DashBoardState
        );
  }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.store.dispatch({type: 'loadCartItems'});
  }

  addNewItemToCart(event) {
    this.store.dispatch({ type: 'addNewItemToCart', payLoad: event});
  }

  increaseQty(event) {
    this.store.dispatch({ type: 'incrementQty', payLoad: event});
  }

  decreaseQty(event) {
    this.store.dispatch({ type: 'decrementQty', payLoad: event});
  }
}


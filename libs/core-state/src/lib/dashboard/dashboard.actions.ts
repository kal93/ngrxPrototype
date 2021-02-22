import { Item } from '@jl/core-data';
import { Action } from '@ngrx/store';

export enum DashBoardActionTypes {
  LoadCartItems = '[Cart] Load Cart Items',
  LoadDashBoardItems = '[ItemList] Load Dash Board Items',// Incoming action
  DashBoardItemsLoaded = '[ItemList] Dash Board Items Loaded', // action completion
  AddNewItemToCart = '[ItemList] Add New Item to Cart',
  IncreaseQty = '[ItemList] Increase Quantity',
  DecreaseQty = '[ItemList] Decrease Quantity',
  RemoveItemFromCart = '[ItemList] Remove Item from Cart',
}

export class LoadCartItems implements Action {
  readonly type = DashBoardActionTypes.LoadCartItems;
}

export class AddNewItemToCart implements Action {
  readonly type = DashBoardActionTypes.AddNewItemToCart;
  constructor(public payLoad) {}
}

export class RemoveItemFromCart implements Action {
  readonly type = DashBoardActionTypes.RemoveItemFromCart;
  constructor(public payLoad) {}
}

export class IncreaseQty implements Action {
  readonly type = DashBoardActionTypes.IncreaseQty;
  constructor(public payLoad) {}
}

export class DecreaseQty implements Action {
  readonly type = DashBoardActionTypes.DecreaseQty;
  constructor(public payLoad) {}
}

export class LoadDashBoardItems implements Action {
  readonly type = DashBoardActionTypes.LoadDashBoardItems;
  // constructor(public payLoad: Item[]) {}
}

export class DashBoardItemsLoaded implements Action {
  readonly type = DashBoardActionTypes.DashBoardItemsLoaded;
  constructor(public payLoad: Item[]) {
    console.log(payLoad, 'ooooo');
  }
}

export type DashBoardActions =
  | AddNewItemToCart
  | IncreaseQty
  | DecreaseQty
  | LoadDashBoardItems
  |DashBoardItemsLoaded
  | RemoveItemFromCart;

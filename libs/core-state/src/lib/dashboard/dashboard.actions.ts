// Actions
import { Item } from '@jl/core-data';
import { Action } from '@ngrx/store';

export enum DashBoardActionTypes {
  LoadCartItems = '[Cart] Load Cart Items',
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

export class IncreaseQty implements Action {
  readonly type = DashBoardActionTypes.IncreaseQty;
  constructor(public payLoad) {}
}

export class DecreaseQty implements Action {
  readonly type = DashBoardActionTypes.DecreaseQty;
  constructor(public payLoad) {}
}

export type DashBoardActions = AddNewItemToCart | IncreaseQty | DecreaseQty;

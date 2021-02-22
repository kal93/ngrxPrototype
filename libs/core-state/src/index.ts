export * from './lib/core-state.module';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDashBoard from './lib/dashboard/dashboard.reducer';

export interface AppState {
    items: fromDashBoard.DashBoardState
}

export const reducer : ActionReducerMap<AppState> = {
    items: fromDashBoard.dashBoardReducer
}

// -------------------------------------------------------------------
// DASHBOARD SELECTORS
// -------------------------------------------------------------------
export const selectDashBoardState = createFeatureSelector<fromDashBoard.DashBoardState>('items');

 
export { DashBoardActions, LoadCartItems, AddNewItemToCart, IncreaseQty, DecreaseQty, LoadDashBoardItems, DashBoardItemsLoaded } from './lib/dashboard/dashboard.actions';
export { DashBoardEffects } from './lib/dashboard/dashboard.effects';
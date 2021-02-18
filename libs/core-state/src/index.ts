export * from './lib/core-state.module';
import { ActionReducerMap } from '@ngrx/store';
import * as fromDashBoard from './lib/dashboard/dashboard.reducer';

export interface AppState {
    items: fromDashBoard.DashBoardState
}

export const reducer : ActionReducerMap<AppState> = {
    items: fromDashBoard.dashBoardReducer
}


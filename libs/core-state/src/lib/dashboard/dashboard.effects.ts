import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Item, ItemService } from '@jl/core-data';
import { DashBoardState } from './dashboard.reducer';
import {
  DashBoardActionTypes,
  DashBoardItemsLoaded,
  LoadDashBoardItems,
} from './dashboard.actions';
import { EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashBoardEffects {
  /**
   * Load dash board items effect which is listening for DashBoardActionTypes.LoadDashBoardItems,
   *  Once the result of all items is received from the api map to another action in reducer which is
   * DashBoardItemsLoaded
   * What we're doing here is creating a middleware which takes an incoming trigger object
   * and puts something else out in this case the completion action
   * */
  @Effect() loadDashBoardItems$ = this.dataPersistence.fetch(
    DashBoardActionTypes.LoadDashBoardItems, // trigger object
    {
      run: (action: LoadDashBoardItems, state: DashBoardState) => {
          console.log('Running...');
        this.itemService.allItems().pipe(
          map((response: Item[]) => {
              console.log(response, 'res')
            new DashBoardItemsLoaded(response); // completed action
          })
        );
      },
      onError: (action: LoadDashBoardItems, e) => {
        console.log(action, e);
      },
    }
  );

  // loadDashBoardItems$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(DashBoardActionTypes.LoadDashBoardItems),
  //     mergeMap(() =>
  //       this.itemService.allItems().pipe(
  //         map((response) => ({ type: '[ItemList] Dash Board Items Loaded', payLoad: response})),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DashBoardState>,
    private itemService: ItemService
  ) {
    console.log('Effectss...');
  }
}

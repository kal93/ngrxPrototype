import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { environment } from '../../../../apps/ngrx-sample/src/environments/environment';
import { DashBoardEffects, reducer } from '../index';

const STORE_NAME = 'dash-board-store';
const storeConfig: RootStoreConfig<any, any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    // NxModule.forRoot(),
    // StoreModule.forRoot(reducer, storeConfig),
    // EffectsModule.forRoot([
    //   DashBoardEffects
    // ]),
    // StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
  ],
})
export class CoreStateModule {}

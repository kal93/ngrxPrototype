import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../apps/ngrx-sample/src/environments/environment';
import { reducer } from '../index';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature('',
    //   {},
    //   {
    //     metaReducers: !environment.production ? [] : [],
    //     runtimeChecks: {
    //       strictActionImmutability: true,
    //       strictStateImmutability: true,
    //     },
    //   }
    // ),
    // EffectsModule.forRoot([]),
    // !environment.production ? StoreDevtoolsModule.instrument({maxAge : 10}) : [],
    // StoreModule.forRoot(
    //   {},
    //   {
    //     metaReducers: !environment.production ? [] : [],
    //     runtimeChecks: {
    //       strictActionImmutability: true,
    //       strictStateImmutability: true,
    //     },
    //   }
    // ),
  ],
})
export class CoreStateModule {}

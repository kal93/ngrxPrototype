import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@jl/core-data';
import { CoreStateModule, DashBoardEffects, reducer } from '@jl/core-state';
// import { reducer } from '../../../../libs/core-state/src/index';
import { MaterialModule } from '@jl/material';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { AppComponent } from './app.component';
import { CartItemsComponent } from './dashboard/cart-items/cart-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectableItemsComponent } from './dashboard/selectable-items/selectable-items.component';
import { NxModule } from '@nrwl/angular';


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
  declarations: [
    AppComponent,
    CartItemsComponent,
    DashboardComponent,
    SelectableItemsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // CoreDataModule,
    // CoreStateModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([
      DashBoardEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
    // NxModule.forRoot(),
    // StoreModule.forRoot(reducer),
    // !environment.production ? StoreDevtoolsModule.instrument({maxAge : 10}) : [],
    // EffectsModule.forRoot([
    //   DashBoardEffects
    // ]),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

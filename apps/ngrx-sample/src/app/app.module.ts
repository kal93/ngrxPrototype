import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@jl/core-data';
import { CoreStateModule, reducer } from '@jl/core-state';
import { MaterialModule } from '@jl/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CartItemsComponent } from './dashboard/cart-items/cart-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectableItemsComponent } from './dashboard/selectable-items/selectable-items.component';


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
    StoreModule.forRoot(reducer),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge : 10}) : [],
    EffectsModule.forRoot([]),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

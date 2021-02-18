import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@jl/material';
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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

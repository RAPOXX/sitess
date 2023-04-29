import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  Encrementa(valor: number) {
    valor++
    return valor
  }

  decrementa(valor): number {
    valor--
    return valor
  }


 }

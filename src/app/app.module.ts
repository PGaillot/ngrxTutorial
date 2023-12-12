import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/**
 *? Les imports lié à NGRX
 * le store module, et le counter reducer.
 */

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';


import { MyCounterComponent } from './my-counter/my-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count : counterReducer}) //? Ajout du StoreModule.forRoot dans les imports.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { BookFilterComponent } from './book-filter/book-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceFilterComponent,
    BookFilterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

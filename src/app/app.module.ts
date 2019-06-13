import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateWeeksComponent } from './date-weeks/date-weeks.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DateWeeksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseModule } from './expense/expense.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpenseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from './services/expense.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ExpenseService
  ]
})
export class SharedModule { }

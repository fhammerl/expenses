import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { expenseComponent } from './expense.component';



@NgModule({
  declarations: [expenseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    expenseComponent
  ]
})
export class ExpenseModule { }

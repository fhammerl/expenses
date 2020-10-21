import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseService } from '../shared/services/expense.service';



@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ExpenseService
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseModule { }

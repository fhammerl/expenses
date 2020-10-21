import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseServiceService } from './services/expense-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ExpenseServiceService
  ]
})
export class SharedModule { }

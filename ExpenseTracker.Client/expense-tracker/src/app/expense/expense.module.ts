import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseService } from '../shared/services/expense.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    NzTableModule,
    FormsModule
  ],
  providers: [
    ExpenseService
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseModule { }

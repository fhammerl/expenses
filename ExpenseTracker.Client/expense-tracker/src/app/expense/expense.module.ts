import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseService } from '../shared/services/expense.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
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

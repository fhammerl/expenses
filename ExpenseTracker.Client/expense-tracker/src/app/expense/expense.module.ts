import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpxenseComponent } from './epxense.component';



@NgModule({
  declarations: [EpxenseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EpxenseComponent
  ]
})
export class ExpenseModule { }

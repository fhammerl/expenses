import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../shared/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
  }



}

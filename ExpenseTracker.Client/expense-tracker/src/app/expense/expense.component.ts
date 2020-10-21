import { Component, OnInit } from '@angular/core';
import { Expense } from '../shared/models/expense';
import { ExpenseService } from '../shared/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[] = []
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getAll().subscribe((expenses) => this.expenses = expenses);
  }
}

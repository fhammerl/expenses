import { Component, OnInit } from '@angular/core';
import { Expense } from '../shared/models/expense';
import { ExpenseService } from '../shared/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[];
  editCache: { [key: string]: { edit: boolean; data: Expense } } = {};
  readonly newRecordId: string = "n/a";

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getAll().subscribe((expenses) => {
      this.expenses = expenses;
      this.updateEditCache();
    }
    );
  }
  editId: string | null = null;

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  saveEdit(id: string): void {
    if (id === this.newRecordId) {
      this.createRecord(id);
    }
    else {
      this.updateRecord(id);
    }
  }

  private createRecord(id: string) {
    var record = this.editCache[id].data;
    delete record.expenseID;
    this.expenseService.create(record).subscribe((result) => {
      Object.assign(this.expenses[this.expenses.length - 1] , result);
      this.updateEditCache();
    });
  }

  private updateRecord(id: string) {
    this.expenseService.update(this.editCache[id].data).subscribe(() => {
      const index = this.expenses.findIndex(item => item.expenseID === id);
      Object.assign(this.expenses[index], this.editCache[id].data);
      this.editCache[id].edit = false;
    });
  }

  updateEditCache(): void {
    this.editCache = {};
    this.expenses.forEach(item => {
      this.editCache[item.expenseID] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  cancelEdit(id: string): void {
    const index = this.expenses.findIndex(item => item.expenseID === id);
    this.editCache[id] = {
      data: { ...this.expenses[index] },
      edit: false
    };
  }

  addRow(): void {
    this.expenses = [
      ...this.expenses, { expenseID: this.newRecordId } as Expense
    ];
    this.updateEditCache();
    this.cancelEdit(this.editId);
    this.startEdit(this.newRecordId);
  }

  deleteRow(id: string): void {
    this.expenseService.delete(id).subscribe(() => {
      this.expenses = this.expenses.filter(e => e.expenseID != id);
      this.updateEditCache();
    });
  }
}

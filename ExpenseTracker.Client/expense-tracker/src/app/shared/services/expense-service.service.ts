import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../models/expense';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  url = 'localhost:5000/expense' // TODO: make it configurable

  constructor(private http: HttpClient) { }

  // TODO: error handling for all
  getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.url);
  }

  create(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.url, expense);
  }

  update(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(this.url, expense);
  }

  delete(expense): Observable<any> {
    return this.http.delete(this.url, expense);
  }
}

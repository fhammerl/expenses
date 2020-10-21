import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../models/expense';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  url = 'localhost:5000/expense' // TODO: make it configurable

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.url);
  }
}

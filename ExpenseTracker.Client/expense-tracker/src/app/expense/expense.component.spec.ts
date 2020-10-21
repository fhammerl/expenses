import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expenseComponent } from './expense.component';

describe('expenseComponent', () => {
  let component: expenseComponent;
  let fixture: ComponentFixture<expenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ expenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(expenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

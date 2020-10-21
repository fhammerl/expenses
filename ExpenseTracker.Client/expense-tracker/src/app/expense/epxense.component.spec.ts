import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpxenseComponent } from './epxense.component';

describe('EpxenseComponent', () => {
  let component: EpxenseComponent;
  let fixture: ComponentFixture<EpxenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpxenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpxenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

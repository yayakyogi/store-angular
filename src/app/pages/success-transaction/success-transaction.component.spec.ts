import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTransactionPage } from './success-transaction.component';

describe('SuccessTransactionPage', () => {
  let component: SuccessTransactionPage;
  let fixture: ComponentFixture<SuccessTransactionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessTransactionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

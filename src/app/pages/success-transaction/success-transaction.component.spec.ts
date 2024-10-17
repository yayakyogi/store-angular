import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTransactionPage } from './success-transaction.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SuccessTransactionPage', () => {
  let component: SuccessTransactionPage;
  let fixture: ComponentFixture<SuccessTransactionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessTransactionPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // Mock any data your component needs from ActivatedRoute
            params: of({ id: '123' }), // Example: Mock route parameters
            queryParams: of({ sort: 'asc' }), // Example: Mock query parameters
            snapshot: {
              data: { title: 'Test Title' }, // Example: Mock snapshot data
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSignUpPage } from './success-sign-up.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SuccessSignUpPage', () => {
  let component: SuccessSignUpPage;
  let fixture: ComponentFixture<SuccessSignUpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessSignUpPage],
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

    fixture = TestBed.createComponent(SuccessSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

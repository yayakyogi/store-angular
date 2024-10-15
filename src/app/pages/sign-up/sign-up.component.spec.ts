import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage } from './sign-up.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpPage, NoopAnimationsModule],
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

    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbComponent],
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

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

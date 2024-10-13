import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductPage } from './detail-product.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailProductPage', () => {
  let component: DetailProductPage;
  let fixture: ComponentFixture<DetailProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProductPage],
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

    fixture = TestBed.createComponent(DetailProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from './product.component';
import { of } from 'rxjs';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
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

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

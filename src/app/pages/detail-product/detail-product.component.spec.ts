import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductPage } from './detail-product.component';

describe('DetailProductPage', () => {
  let component: DetailProductPage;
  let fixture: ComponentFixture<DetailProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProductPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

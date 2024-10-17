import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardValueComponent } from './dashboard-value.component';

describe('DashboardValueComponent', () => {
  let component: DashboardValueComponent;
  let fixture: ComponentFixture<DashboardValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

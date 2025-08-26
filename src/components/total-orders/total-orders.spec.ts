import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrders } from './total-orders';

describe('TotalOrders', () => {
  let component: TotalOrders;
  let fixture: ComponentFixture<TotalOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalOrders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

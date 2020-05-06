import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCustomerComponent } from './premium-customer.component';

describe('PremiumCustomerComponent', () => {
  let component: PremiumCustomerComponent;
  let fixture: ComponentFixture<PremiumCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

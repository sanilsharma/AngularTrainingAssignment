import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCustomerComponent } from './normal-customer.component';

describe('NormalCustomerComponent', () => {
  let component: NormalCustomerComponent;
  let fixture: ComponentFixture<NormalCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

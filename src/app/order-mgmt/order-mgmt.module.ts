import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderMgmtRoutingModule } from './order-mgmt-routing.module';
import { ManageOrderComponent } from './manage-order/manage-order.component';


@NgModule({
  declarations: [ManageOrderComponent],
  imports: [
    CommonModule,
    OrderMgmtRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderMgmtModule { }

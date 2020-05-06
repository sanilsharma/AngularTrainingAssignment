import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderMgmtRoutingModule } from './order-mgmt-routing.module';
import { ManageOrderComponent } from './manage-order/manage-order.component';


@NgModule({
  declarations: [ManageOrderComponent],
  imports: [
    CommonModule,
    OrderMgmtRoutingModule
  ]
})
export class OrderMgmtModule { }

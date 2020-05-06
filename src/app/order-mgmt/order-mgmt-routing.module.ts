import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageOrderComponent } from './manage-order/manage-order.component';


const routes: Routes = [
  { path: '', redirectTo: 'manageOrder', pathMatch: 'full' },
  { path: 'manageOrder', component: ManageOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderMgmtRoutingModule { }

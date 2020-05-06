import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NormalCustomerComponent } from './normal-customer/normal-customer.component';
import { PremiumCustomerComponent } from './premium-customer/premium-customer.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'customer', component: CustomerDetailsComponent,
    children: [
      { path: '', redirectTo: 'child-one-normal', pathMatch: 'full' },
      { path: 'child-one-normal', component: NormalCustomerComponent },
      { path: 'child-one-premium', component: PremiumCustomerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

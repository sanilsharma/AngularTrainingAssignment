import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NormalCustomerComponent } from './normal-customer/normal-customer.component';
import { PremiumCustomerComponent } from './premium-customer/premium-customer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'customer', component: CustomerDetailsComponent,
        children: [
          { path: '', redirectTo: 'child-one-normal', pathMatch: 'full' },
          { path: 'child-one-normal', component: NormalCustomerComponent },
          { path: 'child-one-premium', component: PremiumCustomerComponent }
        ]
      },
      { path: 'order-mgmt', loadChildren: () => import('./order-mgmt/order-mgmt.module').then(m => m.OrderMgmtModule) },
      { path: 'logout', redirectTo: '/', pathMatch: 'full' }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

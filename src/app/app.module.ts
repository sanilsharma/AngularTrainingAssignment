import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomethingComponent } from './something/something.component';
import { TestPipePipe } from './something/test-pipe.pipe';
import { HighlightDirectiveDirective } from './something/highlight-directive.directive';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NormalCustomerComponent } from './normal-customer/normal-customer.component';
import { PremiumCustomerComponent } from './premium-customer/premium-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent,
    TestPipePipe,
    HighlightDirectiveDirective,
    HomeComponent,
    CustomerDetailsComponent,
    NormalCustomerComponent,
    PremiumCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({ serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

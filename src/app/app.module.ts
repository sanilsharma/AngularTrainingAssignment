import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomethingComponent } from './something/something.component';
import { TestPipePipe } from './something/test-pipe.pipe';
import { HighlightDirectiveDirective } from './something/highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent,
    TestPipePipe,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

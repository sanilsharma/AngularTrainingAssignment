import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brillio-Angular8';
  name = 'Angular Training';
  clickMessage = 'Morning';

  onClickMe() {
    console.log("Event Fired !!!1");
    this.clickMessage = "Training ! is Active";

  }
}

import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { MyServiceService } from './my-service.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {

  getData: any[];

  custArray: Array<Customer> = new Array();
  model = new Customer('', 0);
  update = false;
  indexToUpdate = undefined;
  show = this.custArray.length === 0 ? false : true;

  constructor(private _httpService: MyServiceService, private logger: NGXLogger) {

    this.logger.debug('Your messages got here');
    this.logger.debug('Constructor called');

  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  createCustomer() {

    console.log("Customer creation here --->");
    this.custArray.push(new Customer(this.model.name, this.model.age));
    console.log(JSON.stringify(this.custArray));
    this.logger.debug(JSON.stringify(this.custArray));
    this.model = new Customer('', 0);
    this.show = this.custArray.length === 0 ? false : true;
  }

  deleteCustomer(i: number) {
    this.custArray.splice(i, 1);
    this.show = this.custArray.length === 0 ? false : true;
  }

  getCustomerForUpdate(i: number) {
    this.update = true;
    this.indexToUpdate = i;
    this.model = new Customer(this.custArray[i].name, this.custArray[i].age);
  }

  updateCustomer() {
    this.custArray[this.indexToUpdate].name = this.model.name;
    this.custArray[this.indexToUpdate].age = this.model.age;
    console.log('item updated');
    this.show = this.custArray.length === 0 ? false : true;
    this.update = false;
    this.indexToUpdate = undefined;
    this.model = new Customer('', 0);
  }

  getUser() {
    this._httpService.getUserDetails().subscribe((res: any[]) => {
      console.log(res);
      this.logger.debug("Get User Method called ", res);
      this.getData = res;
    });
  }
}

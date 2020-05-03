import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {

  custArray: Array<Customer> = new Array();
  model = new Customer('', 0);
  update = false;
  indexToUpdate = undefined;

  constructor() { }

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
    this.model = new Customer('', 0);
  }

  deleteCustomer(i: number) {
    this.custArray.splice(i, 1);
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
    this.update = false;
    this.indexToUpdate = undefined;
    this.model = new Customer('', 0);
  }
}

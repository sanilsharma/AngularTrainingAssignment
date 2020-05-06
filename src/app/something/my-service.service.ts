import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  //get // fetch
  getUserDetails() {
    return this.http.get
      ('http://localhost:7000/users');

    // ('https://jsonplaceholder.typicode.com/users');
  }
}

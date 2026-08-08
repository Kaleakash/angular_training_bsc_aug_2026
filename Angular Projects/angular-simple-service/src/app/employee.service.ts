import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  sayHello():string {
    return "Hello from Employee Service";
  }
  
}

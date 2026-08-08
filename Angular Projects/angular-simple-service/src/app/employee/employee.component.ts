import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  msg:string ="";
  // Injecting the EmployeeService into the AppComponent
  constructor(private employeeService: EmployeeService) { }
  
  show(): void {
    this.msg = this.employeeService.sayHello();
  }
}

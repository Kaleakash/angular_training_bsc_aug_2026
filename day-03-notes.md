
Angular Component : component is uses to control the view or part of view. 
@Component 
which connect html and css page with help of selector(user defined tags)

Angular module : module is a collection of more than one components. 
@NgModule 

What is an Angular Service?
Definition

An Angular Service is a TypeScript class 
that contains business logic, reusable code, 
data management, and API communication, which can be shared across multiple components.

Services help keep components clean by moving reusable logic outside the component.

Simple Definition

A Service is a reusable class that performs common tasks and shares data across components.

Why Do We Need Services?

Without Services:

Business logic is written inside every component.
Code is duplicated.
Maintenance becomes difficult.
Components become large and difficult to manage.

With Services:

Reusable code
Better maintainability
Code sharing
Easier testing
Separation of concerns

Creating a Service

Using Angular CLI

ng generate service employee

Shortcut

ng g s employee

Angular creates

employee.service.ts
employee.service.spec.ts

Service Structure
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() {

  }

}


IOC : Inversion of control : programming design pattern. 
In place of creating any resource or object manually allow to create by container 
if container, it will create properly and maintain properly. whenever you need 
pull from container use and and leave it. 
IOc is a concept 

DI  : Dependency Injection 

implementation of IOC. 
setter base 
constructor base 

But angular support only constructor base DI. 

Understanding @Injectable()
Definition

@Injectable() tells Angular that this class can participate 
in Dependency Injection (DI).

providedIn:'root'
@Injectable({
providedIn:'root'
})
export class EmployeeService {


}

Meaning:

One object is created.
Shared across the entire application.
Singleton Service.

What is Dependency Injection (DI)?
Definition

Dependency Injection is a design pattern where Angular automatically creates and provides required objects instead of the developer creating them manually.

Without Dependency Injection
let service = new EmployeeService();

Every component creates its own object.

With Dependency Injection

constructor(private employeeService:EmployeeService){

}

Angular automatically creates and injects the object.

Dependency Injection Flow
Angular

↓

Creates Service

↓

Stores Object

↓

Injects into Component

↓

Component Uses Service
First Service Example

employee.service.ts
import { Injectable } from '@angular/core';
@Injectable({
  providedIn:'root'
})
export class EmployeeService {
  getMessage(){
    return "Welcome to Angular Service";
  }
}

app.component.ts
import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({

selector:'app-root',

templateUrl:'./app.component.html'

})

export class AppComponent{

message="";

constructor(private service:EmployeeService){   // DI 

}

show(){
//let obj = new EmployeeService();
//this.message = obj.getMessage();
//this.message=this.service.getMessage();

}

}
app.component.html
<button (click)="show()">

Show Message

</button>

<h2>{{message}}</h2>
Output
Show Message

↓

Welcome to Angular Service
Service Returning Employee Data
employee.service.ts
import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'
})

export class EmployeeService{

employees=[

{id:101,name:"Akash",salary:50000},

{id:102,name:"Rahul",salary:45000},

{id:103,name:"Neha",salary:60000}

];

getEmployees(){

return this.employees;

}

}
app.component.ts
import { Component } from '@angular/core';

import { EmployeeService } from './employee.service';

@Component({

selector:'app-root',

templateUrl:'./app.component.html'

})

export class AppComponent{

employees:any[]=[];

constructor(private service:EmployeeService){

}

ngOnInit(){

this.employees=this.service.getEmployees();

}

}
app.component.html
<h2>Employee List</h2>

<table border="1">

<tr>

<th>ID</th>

<th>Name</th>

<th>Salary</th>

</tr>

<tr *ngFor="let emp of employees">

<td>{{emp.id}}</td>

<td>{{emp.name}}</td>

<td>{{emp.salary}}</td>

</tr>

</table>
Output
ID      Name      Salary

101     Akash     50000

102     Rahul     45000

103     Neha      60000

What is HttpClient?
Definition

HttpClient is a built-in Angular service provided by @angular/common/http 
that is used to communicate with REST APIs or web services over the HTTP protocol.

It supports all HTTP methods such as GET, POST, PUT, DELETE, PATCH etc

Simple Definition

HttpClient is Angular's built-in service used to send HTTP requests to a 
backend server and receive responses.

Why Do We Need HttpClient?

Without HttpClient:

We cannot communicate with a backend.
No database interaction.
No REST API communication.
Data cannot be fetched or saved.

With HttpClient:

Fetch data
Save data
Update data
Delete data
Upload files
Download files

Real-Life Example

Suppose we have an Employee Management System.

User

↓

Employee Component

↓

Employee Service

↓

HttpClient

↓

Spring Boot REST API

↓

MySQL Database

↓

JSON Response

↓

HttpClient

↓

Employee Service

↓

Employee Component

↓

HTML


Creating application ie Employee Management System 

Project Structure

employee-management
│
├── src
│   ├── app
│   │
│   ├── employee
│   │      employee.component.ts
│   │      employee.component.html
│   │      employee.component.css
│   │
│   ├── services
│   │      employee.service.ts
│   │
│   ├── models
│   │      employee.ts
│   │
│   ├── app.module.ts
│   │
│   └── app-routing.module.ts
│
├── db.json
├── package.json
└── angular.json

Create Angular Project
ng new employee-management

JSON SERVER is a node js module which help to create simple rest api means running 
simple static file as json server 

Install json-server

npm install -g json-server

Check version

json-server --version

create the file with name as 

db.json

Create Database

db.json

{
  "employees": [
    {
      "id": 101,
      "name": "Akash",
      "department": "Training",
      "salary": 65000
    },
    {
      "id": 102,
      "name": "Rahul",
      "department": "Development",
      "salary": 55000
    },
    {
      "id": 103,
      "name": "Neha",
      "department": "HR",
      "salary": 50000
    },
    {
      "id": 104,
      "name": "Ramesh",
      "department": "Testing",
      "salary": 48000
    },
    {
      "id": 105,
      "name": "Priya",
      "department": "Support",
      "salary": 45000
    }
  ]
}

Run json-server 

json-server --watch db.json --port 3000


Output

Resources

http://localhost:3000/employees

Open browser

http://localhost:3000/employees

Create Angular Files

Generate component

ng g c employee

Generate service

ng g s services/employee

Create model

src/app/models

Create

employee.ts




Project Structure

src

app

│

├── employee

│      employee.component.ts

│      employee.component.html

│      employee.component.css

│

├── models

│      employee.ts

│

├── services

│      employee.service.ts

│

├── app.module.ts

│

└── app.component.html


Step 9 Employee Interface

employee.ts

export interface Employee{

id:number;

name:string;

department:string;

salary:number;

}

Employee Interface

employee.ts

export interface Employee{

id:number;

name:string;

department:string;

salary:number;

}
Step 10 Import HttpClientModule

Open

app.module.ts
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';

@NgModule({

declarations:[

AppComponent,

EmployeeComponent

],

imports:[

BrowserModule,

FormsModule,

HttpClientModule

],

providers:[],

bootstrap:[AppComponent]

})

export class AppModule{

}
Step 11 Replace app.component.html
<app-employee></app-employee>

employee.service.ts



import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Employee } from '../models/employee';

@Injectable({

  providedIn: 'root'

})

export class EmployeeService {

  // REST API URL

  private apiUrl = "http://localhost:3000/employees";

  constructor(private http: HttpClient) {

  }

  // ==========================================
  // GET ALL EMPLOYEES
  // ==========================================

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.apiUrl);

  }

  // ==========================================
  // GET EMPLOYEE BY ID
  // ==========================================

  getEmployeeById(id: number): Observable<Employee> {

    return this.http.get<Employee>(`${this.apiUrl}/${id}`);

  }

  // ==========================================
  // ADD NEW EMPLOYEE
  // ==========================================

  addEmployee(employee: Employee): Observable<Employee> {

    return this.http.post<Employee>(this.apiUrl, employee);

  }

  // ==========================================
  // UPDATE EMPLOYEE
  // ==========================================

  updateEmployee(id: number, employee: Employee): Observable<Employee> {

    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);

  }

  // ==========================================
  // DELETE EMPLOYEE
  // ==========================================

  deleteEmployee(id: number): Observable<any> {

    return this.http.delete(`${this.apiUrl}/${id}`);

  }

}


Understanding Each Method
1. GET All Employees
getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
}

Request

GET http://localhost:3000/employees

Returns

[
  {
    "id":101,
    "name":"Raj",
    "department":"Training",
    "salary":65000
  }
]

employee.component.ts file 

import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // Employee List
  employees: Employee[] = [];

  // Employee Object (Used for Form)
  employee: Employee = {
    id: 0,
    name: '',
    department: '',
    salary: 0
  };

  // Button Text
  buttonText: string = "Save";

  // Edit Flag
  isEditMode: boolean = false;

  // Search Text
  searchText: string = "";

  constructor(private employeeService: EmployeeService) { }

  // ============================================
  // ngOnInit
  // ============================================

  ngOnInit(): void {

    this.loadEmployees();

  }

  // ============================================
  // GET ALL EMPLOYEES
  // ============================================

  loadEmployees(): void {

    this.employeeService.getEmployees()
      .subscribe({

        next: (data: Employee[]) => {

          this.employees = data;

        },

        error: (error) => {

          console.error("Error Loading Employees");

          console.log(error);

        }

      });

  }

  // ============================================
  // SAVE BUTTON
  // ============================================

  saveEmployee(): void {

    if (this.isEditMode) {

      this.updateEmployee();

    }
    else {

      this.addEmployee();

    }

  }

  // ============================================
  // ADD EMPLOYEE
  // ============================================

  addEmployee(): void {

    this.employeeService.addEmployee(this.employee)
      .subscribe({

        next: () => {

          alert("Employee Added Successfully");

          this.loadEmployees();

          this.resetForm();

        },

        error: (error) => {

          alert("Unable To Add Employee");

          console.log(error);

        }

      });

  }

  // ============================================
  // EDIT EMPLOYEE
  // ============================================

  editEmployee(emp: Employee): void {

    this.employee = {

      id: emp.id,

      name: emp.name,

      department: emp.department,

      salary: emp.salary

    };

    this.buttonText = "Update";

    this.isEditMode = true;

  }

  // ============================================
  // UPDATE EMPLOYEE
  // ============================================

  updateEmployee(): void {

    this.employeeService
      .updateEmployee(this.employee.id, this.employee)
      .subscribe({

        next: () => {

          alert("Employee Updated Successfully");

          this.loadEmployees();

          this.resetForm();

        },

        error: (error) => {

          alert("Unable To Update Employee");

          console.log(error);

        }

      });

  }

  // ============================================
  // DELETE EMPLOYEE
  // ============================================

  deleteEmployee(id: number): void {

    let status = confirm("Do you want to delete this employee?");

    if (status) {

      this.employeeService.deleteEmployee(id)
        .subscribe({

          next: () => {

            alert("Employee Deleted Successfully");

            this.loadEmployees();

          },

          error: (error) => {

            alert("Unable To Delete Employee");

            console.log(error);

          }

        });

    }

  }

  // ============================================
  // RESET FORM
  // ============================================

  resetForm(): void {

    this.employee = {

      id: 0,

      name: '',

      department: '',

      salary: 0

    };

    this.buttonText = "Save";

    this.isEditMode = false;

  }

  // ============================================
  // SEARCH EMPLOYEE
  // ============================================

  searchEmployee(): void {

    if (this.searchText.trim() == "") {

      this.loadEmployees();

      return;

    }

    this.employees = this.employees.filter(emp =>

      emp.name.toLowerCase().includes(this.searchText.toLowerCase())

    );

  }

}



employee.component.html 

<div class="container">

    <!-- ========================================= -->
    <!-- Header -->
    <!-- ========================================= -->

    <div class="header">

        <h1>Employee Management System</h1>

    </div>

    <!-- ========================================= -->
    <!-- Employee Form -->
    <!-- ========================================= -->

    <div class="card">

        <h2>Employee Information</h2>

        <form #employeeForm="ngForm"
              (ngSubmit)="saveEmployee()">

            <div class="form-group">

                <label>Employee ID</label>

                <input
                        type="number"
                        name="id"
                        [(ngModel)]="employee.id"
                        #id="ngModel"
                        required>

                <span
                      class="error"
                      *ngIf="id.invalid && id.touched">

                    Employee ID is required

                </span>

            </div>

            <div class="form-group">

                <label>Employee Name</label>

                <input
                        type="text"
                        name="name"
                        [(ngModel)]="employee.name"
                        #name="ngModel"
                        required
                        minlength="3">

                <span
                      class="error"
                      *ngIf="name.invalid && name.touched">

                    Enter Employee Name

                </span>

            </div>

            <div class="form-group">

                <label>Department</label>

                <select
                        name="department"
                        [(ngModel)]="employee.department"
                        #department="ngModel"
                        required>

                    <option value="">Select Department</option>

                    <option>Training</option>

                    <option>Development</option>

                    <option>Testing</option>

                    <option>HR</option>

                    <option>Support</option>

                </select>

                <span
                      class="error"
                      *ngIf="department.invalid && department.touched">

                    Select Department

                </span>

            </div>

            <div class="form-group">

                <label>Salary</label>

                <input
                        type="number"
                        name="salary"
                        [(ngModel)]="employee.salary"
                        #salary="ngModel"
                        required>

                <span
                      class="error"
                      *ngIf="salary.invalid && salary.touched">

                    Enter Salary

                </span>

            </div>

            <div class="button-group">

                <button
                        class="save-btn"
                        type="submit"
                        [disabled]="employeeForm.invalid">

                    {{buttonText}}

                </button>

                <button
                        class="reset-btn"
                        type="button"
                        (click)="resetForm()">

                    Reset

                </button>

            </div>

        </form>

    </div>

    <!-- ========================================= -->
    <!-- Search Employee -->
    <!-- ========================================= -->

    <div class="card">

        <h2>Search Employee</h2>

        <input
                type="text"
                placeholder="Search by Employee Name..."
                [(ngModel)]="searchText"
                (keyup)="searchEmployee()">

    </div>

    <!-- ========================================= -->
    <!-- Employee Table -->
    <!-- ========================================= -->

    <div class="card">

        <h2>Employee List</h2>

        <table>

            <thead>

            <tr>

                <th>ID</th>

                <th>Name</th>

                <th>Department</th>

                <th>Salary</th>

                <th>Edit</th>

                <th>Delete</th>

            </tr>

            </thead>

            <tbody>

            <tr *ngFor="let emp of employees">

                <td>{{emp.id}}</td>

                <td>{{emp.name}}</td>

                <td>{{emp.department}}</td>

                <td>{{emp.salary}}</td>

                <td>

                    <button
                            class="edit-btn"
                            (click)="editEmployee(emp)">

                        Edit

                    </button>

                </td>

                <td>

                    <button
                            class="delete-btn"
                            (click)="deleteEmployee(emp.id)">

                        Delete

                    </button>

                </td>

            </tr>

            <tr *ngIf="employees.length==0">

                <td colspan="6">

                    No Employee Found

                </td>

            </tr>

            </tbody>

        </table>

    </div>

</div>



app.component.css file 

/* =====================================
   Global Settings
===================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

/* =====================================
   Page Background
===================================== */

body{

    background:#f4f6f9;

}

/* =====================================
   Main Container
===================================== */

.container{

    width:90%;

    max-width:1000px;

    margin:30px auto;

}

/* =====================================
   Header
===================================== */

.header{

    background:#1976d2;

    color:white;

    padding:20px;

    text-align:center;

    border-radius:8px;

    margin-bottom:20px;

}

.header h1{

    font-size:30px;

}

/* =====================================
   Card
===================================== */

.card{

    background:white;

    padding:20px;

    margin-bottom:25px;

    border-radius:8px;

    box-shadow:0px 3px 10px rgba(0,0,0,0.2);

}

.card h2{

    margin-bottom:20px;

    color:#1976d2;

}

/* =====================================
   Form Group
===================================== */

.form-group{

    margin-bottom:20px;

}

.form-group label{

    display:block;

    font-weight:bold;

    margin-bottom:8px;

}

/* =====================================
   Input Fields
===================================== */

input{

    width:100%;

    padding:10px;

    border:1px solid #999;

    border-radius:5px;

    font-size:16px;

}

select{

    width:100%;

    padding:10px;

    border:1px solid #999;

    border-radius:5px;

    font-size:16px;

}

/* =====================================
   Input Focus
===================================== */

input:focus,
select:focus{

    outline:none;

    border:2px solid royalblue;

}

/* =====================================
   Validation Message
===================================== */

.error{

    color:red;

    font-size:13px;

    display:block;

    margin-top:5px;

}

/* =====================================
   Buttons
===================================== */

.button-group{

    text-align:center;

    margin-top:25px;

}

button{

    padding:10px 25px;

    border:none;

    border-radius:5px;

    font-size:15px;

    cursor:pointer;

    color:white;

    margin:5px;

    transition:0.3s;

}

/* =====================================
   Save Button
===================================== */

.save-btn{

    background:green;

}

.save-btn:hover{

    background:darkgreen;

}

/* =====================================
   Reset Button
===================================== */

.reset-btn{

    background:orange;

}

.reset-btn:hover{

    background:darkorange;

}

/* =====================================
   Edit Button
===================================== */

.edit-btn{

    background:#1976d2;

}

.edit-btn:hover{

    background:#0d47a1;

}

/* =====================================
   Delete Button
===================================== */

.delete-btn{

    background:red;

}

.delete-btn:hover{

    background:darkred;

}

/* =====================================
   Disabled Button
===================================== */

button:disabled{

    background:gray;

    cursor:not-allowed;

}

/* =====================================
   Search Box
===================================== */

input[type=text]{

    margin-top:10px;

}

/* =====================================
   Table
===================================== */

table{

    width:100%;

    border-collapse:collapse;

    margin-top:20px;

}

table th{

    background:#1976d2;

    color:white;

    padding:12px;

    border:1px solid white;

}

table td{

    padding:12px;

    border:1px solid #ddd;

    text-align:center;

}

/* =====================================
   Zebra Rows
===================================== */

table tbody tr:nth-child(even){

    background:#f8f8f8;

}

/* =====================================
   Hover Effect
===================================== */

table tbody tr:hover{

    background:#dbeeff;

}

/* =====================================
   No Employee Found
===================================== */

table td[colspan]{

    color:red;

    font-weight:bold;

}

/* =====================================
   Responsive Design
===================================== */

@media screen and (max-width:768px){

.container{

    width:95%;

}

.header h1{

    font-size:24px;

}

button{

    width:100%;

}

table{

    font-size:13px;

}

table th,
table td{

    padding:8px;

}

}

app.component.html

Since our application has only one page, we simply load the Employee Component.

<app-employee></app-employee>

app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Employee Management System';

}

app.component.css
/* Root Component */

:host{

    display:block;

    width:100%;

}

app.module.ts

This is the most important file.

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';

@NgModule({

  declarations: [

    AppComponent,

    EmployeeComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    FormsModule,

    HttpClientModule

  ],

  providers: [

  ],

  bootstrap: [

    AppComponent

  ]

})

export class AppModule {

}

What is Angular Routing?
Definition

Angular Routing is a mechanism that enables navigation between different components (pages) in a Single Page Application (SPA) without reloading the browser.

Simple Definition

Routing allows users to move from one page to another inside an Angular application.

Why Routing?

Imagine an Employee Management System.

Without Routing

Home.html

Employee.html

Department.html

About.html

Every page loads separately.

With Angular Routing

Home Component

↓

Employee Component

↓

Department Component

↓

About Component

Browser never refreshes.

Real-Time Example
Employee Management System

-------------------------

Home

Employee

Department

Salary

About

Contact

Login

Every menu opens a different component.

SPA Flow
Browser

↓

index.html

↓

Angular

↓

Home Component

↓

Employee Component

↓

Department Component

↓

About Component

Step 1 Create Project
ng new login-app

Choose

Would you like to add Angular Routing?

Yes

CSS

CSS
Step 2 Generate Components
ng g c login

ng g c dashboard

ng g c about

ng g c contact
Step 3 Configure Routing
app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
Step 4 app.component.html
<h1 align="center">
    Angular Routing Example
</h1>

<hr>

<a routerLink="/login">Login</a> |

<a routerLink="/about">About</a> |

<a routerLink="/contact">Contact</a>

<hr>

<router-outlet></router-outlet>
Step 5 Login Component
login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username = "";

  password = "";

  constructor(private router: Router) {

  }

  login() {

    if (this.username == "admin" &&
        this.password == "admin") {

      alert("Login Successful");

      this.router.navigate(['/dashboard']);

    }

    else {

      alert("Invalid Username or Password");

    }

  }

}
login.component.html
<h2>Login Page</h2>

<table>

<tr>

<td>Username</td>

<td>

<input
type="text"
[(ngModel)]="username">

</td>

</tr>

<tr>

<td>Password</td>

<td>

<input
type="password"
[(ngModel)]="password">

</td>

</tr>

<tr>

<td colspan="2">

<button
(click)="login()">

Login

</button>

</td>

</tr>

</table>
login.component.css
table{

margin-top:20px;

}

td{

padding:10px;

}

input{

padding:5px;

}

button{

padding:8px 20px;

}
Dashboard Component
dashboard.component.html
<h2>Dashboard</h2>

<hr>

<h3>

Welcome Admin

</h3>

<p>

Login Successful.

</p>
dashboard.component.ts
import { Component } from '@angular/core';

@Component({

selector:'app-dashboard',

templateUrl:'./dashboard.component.html'

})

export class DashboardComponent{

}
About Component
about.component.html
<h2>About Us</h2>

<p>

This application demonstrates Angular Routing.

</p>

<p>

Developed using Angular 12.

</p>
about.component.ts
import { Component } from '@angular/core';

@Component({

selector:'app-about',

templateUrl:'./about.component.html'

})

export class AboutComponent{

}
Contact Component
contact.component.html
<h2>Contact Us</h2>

<p>

Email :

training@example.com

</p>

<p>

Phone :

9876543210

</p>
contact.component.ts
import { Component } from '@angular/core';

@Component({

selector:'app-contact',

templateUrl:'./contact.component.html'

})

export class ContactComponent{

}
app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';

@NgModule({

declarations:[

AppComponent,

LoginComponent,

DashboardComponent,

AboutComponent,

ContactComponent

],

imports:[

BrowserModule,

FormsModule,

AppRoutingModule

],

providers:[],

bootstrap:[AppComponent]

})

export class AppModule{

}
Application Flow
Application Starts

↓

Login Page

↓

Enter

admin

admin

↓

Login Button

↓

Router.navigate()

↓

Dashboard

------------------------

Click About

↓

About Component

------------------------

Click Contact

↓

Contact Component
URLs
http://localhost:4200/

Login

http://localhost:4200/login

Dashboard

http://localhost:4200/dashboard

About

http://localhost:4200/about

Contact

http://localhost:4200/contact

Amazon Web Services (AWS) – High-Level Overview
What is AWS?

Amazon Web Services (AWS) is a cloud computing platform provided by Amazon that offers on-demand IT services such as servers, storage, databases, networking, security, artificial intelligence, analytics, and many other cloud services over the internet.

Instead of purchasing and maintaining physical hardware, organizations can rent these services and pay only for what they use.

Simple Definition

AWS is a cloud platform where you can rent computing resources such as servers, storage, databases, and networking instead of buying your own hardware.

Amazon EC2 (Elastic Compute Cloud)
What is EC2?

Amazon EC2 (Elastic Compute Cloud) is an AWS service that allows you to create and run virtual servers in the cloud. These virtual servers are called EC2 Instances.

Instead of buying a physical computer or server, you can rent a virtual server from AWS and use it to host applications, websites, databases, or APIs.

Simple Definition

EC2 is a virtual machine (server) provided by AWS that allows you to run applications in the cloud.

Update the System
Amazon Linux 2

sudo yum update -y

Amazon Linux 2023
sudo dnf update -y

Step 3: Install Git
Amazon Linux 2
sudo yum install git -y

Amazon Linux 2023
sudo dnf install git -y


This is the easiest way if you specifically need Node.js 18.10.0.

Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

Reload your shell

source ~/.bashrc

or

source ~/.bash_profile

Check

nvm --version
Install Node.js 18.10.0
nvm install 18.10.0

Use it

nvm use 18.10.0

Make it default

nvm alias default 18.10.0

Verify

node -v

Output

v18.10.0

Check npm

npm -v



create angular project and run on ec2 instance using command as 


ng serve --host 0.0.0.0



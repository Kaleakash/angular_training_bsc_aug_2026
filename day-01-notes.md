Angular 12/16
Angular Framework 22 

VS Code : 
Node JS : 18.10 

http://www.google.com --->URL : Uniform resource locator 

                        req(http/https)----->

Client                                                  Server 

                        <----res(http/https)

                                                    HTML 

1. HTML (HyperText Markup Language) 1,2,3,4 and 5

Definition:
HTML is the standard markup language used 
to create the structure of a web page.

Purpose:
Defines what content appears on the webpage.

High-Level Topics

HTML Document Structure
Text Elements
Hyperlinks
Images
Lists
Tables
Forms
Multimedia
Semantic HTML

Output: Web page structure (Skeleton)

2. CSS (Cascading Style Sheets)

Definition:
CSS is used to style and format HTML elements.

Purpose:
Controls the appearance and layout of a webpage.

High-Level Topics

CSS Introduction
CSS Selectors
Colors & Backgrounds
Fonts & Text Styling
Box Model
Positioning
Flexbox
CSS Grid
Responsive Design
Transitions & Animations

Output: Beautiful and responsive web pages (Design)

3. JavaScript (JS)

Definition:
JavaScript is a programming language that makes 
web pages interactive, dynamic as well as help to do 
validation on client machine. 

Purpose:
Adds logic, interactivity, and communication with servers.

High-Level Topics

Variables & Data Types
Operators
Conditional Statements
Loops
Functions
Arrays & Objects
DOM Manipulation
Events
Form Validation
ES6 Features
Asynchronous Programming
API Integration

Output: Interactive and dynamic applications (Behavior)

TypeScript for Angular Developers

What is TypeScript?
Definition

TypeScript is an open-source programming language developed by Microsoft. 
It is a superset of JavaScript, 
which means every valid JavaScript program is also a valid TypeScript program.

TypeScript adds powerful features such as:

Static Typing
Object-Oriented Programming (OOP)
Interfaces
Generics
Modules
Decorators
Better IDE Support

TypeScript code is compiled into JavaScript, which browsers can execute.

Real-Life Example

Imagine writing an email.

JavaScript is like writing the email and checking for mistakes only after you send it.
TypeScript is like using spell check and grammar check before sending the email.

we need to write the code in TS and we need to convert ts to js. 

node js provided set of module help to convert ts to js, creating angular or react js project. 

npm (node package manager): npm help to download external js module. 

syntax to install external module 

npm install -g moduleName 

npm install -g typescript@5.5

to convert ts to js we need to run below command as 

tsc filename.ts 
it will generate js file 
to run the js file we can use the command as

node filename.js 


TypeScript catches many errors before the program runs.

Why Do We Need TypeScript?

JavaScript is easy to learn but becomes difficult to maintain in large applications.

Example:

let age = 25;

age = "Twenty Five";

console.log(age);

JavaScript allows this without showing an error.

Output

Twenty Five

In a large application, this can cause bugs.

Now TypeScript:

let age:number = 25;

age = "Twenty Five";

Output

Error:
Type 'string' is not assignable to type 'number'

TypeScript detects the mistake during compilation.

Why Angular Uses TypeScript

Angular applications can contain hundreds of components and thousands of lines of code.

TypeScript helps by providing:

Better code organization
Strong typing
Object-Oriented Programming
Better tooling support
Easier debugging
Easier maintenance

That's why Angular is built on TypeScript.

TypeScript Architecture
                TypeScript Source Code
                     (.ts files)
                          │
                          ▼
                 TypeScript Compiler
                      (tsc)
                          │
                          ▼
                  JavaScript (.js)
                          │
                          ▼
                  Browser Executes Code
Features of TypeScript

Static Typing

Variables have predefined data types.

Example

let salary:number = 50000;

Benefit

Detects errors early
Improves code quality

Object-Oriented Programming

Supports

Classes
Objects
Inheritance
Polymorphism
Abstraction
Encapsulation

Example

class Employee{

}

Angular uses classes for Components and Services.

Interfaces

Interfaces define the structure of an object.

Example

interface Employee{

    id:number;

    name:string;

}

Angular uses interfaces for API models.

Generics

Generics allow reusable code.

Example

function display<T>(value:T){

    console.log(value);

}

Angular uses Generics in HttpClient.

Modules

Modules organize code into multiple files.

Example

export class Employee{

}

Angular applications are completely modular.

Decorators

Decorators provide metadata.

Example

@Component({

})

Decorators are the backbone of Angular.

Variables
Definition

A variable is a named memory location used to store data. In TypeScript, variables can have a specific type, helping prevent invalid assignments.

Why Do We Need Variables?

Variables allow us to store information that can be used and modified throughout a program.

Examples:

Employee Name
Product Price
Student Marks
Login Status

Without variables, we would have to hard-code values everywhere, making programs difficult to maintain.

Syntax
let variableName: datatype = value;
Working Example
let employeeName: string = "Raj";
let age: number = 35;
let salary: number = 55000;
let isTrainer: boolean = true;

console.log(employeeName);
console.log(age);
console.log(salary);
console.log(isTrainer);
Output
Akash
35
55000
true

Angular Use Case

export class EmployeeComponent {

  employeeName = "Akash";
  salary = 50000;

}

These variables are displayed in the HTML template using interpolation:

<h2>{{employeeName}}</h2>
<p>{{salary}}</p>
2. Variable Declaration Keywords

TypeScript supports three keywords:

var
let
const
var
Definition

var declares a variable with function scope. It can be redeclared and reassigned.

Example
var city = "Pune";

var city = "Mumbai";

console.log(city);

Output

Mumbai
Problem with var
for(var i=1;i<=3;i++){

}

console.log(i);

Output

4

The variable i is still accessible outside the loop because var has function scope.

let
Definition

let declares a variable with block scope. It can be reassigned but cannot be redeclared in the same scope.

Example
let city = "Pune";

city = "Mumbai";

console.log(city);

Output

Mumbai
Block Scope Example
for(let i=1;i<=3;i++){

    console.log(i);

}

// console.log(i); // Error

Output

1
2
3
const
Definition

const creates a constant variable. Its value cannot be changed after initialization.

Example
const PI = 3.14;

console.log(PI);

Output

3.14

Attempting to modify it:

const PI = 3.14;

PI = 3.1415;

Output

Error:
Cannot assign to 'PI' because it is a constant.

Data Types
Definition

A data type specifies the kind of value that a variable can store.

Why Are Data Types Important?

Data types:

Prevent invalid assignments
Improve readability
Help detect errors early
Make code easier to maintain
Number

Stores integers and decimal values.

let marks: number = 95;

let price: number = 1500.75;

console.log(marks);

console.log(price);

Output

95
1500.75
String

Stores textual data.

let firstName: string = "Akash";

console.log(firstName);

Output

Akash
Boolean

Stores either true or false.

let isLoggedIn: boolean = true;

console.log(isLoggedIn);

Output

true
Array

Stores multiple values of the same type.

let subjects: string[] = ["HTML", "CSS", "JavaScript"];

console.log(subjects);

Output

["HTML","CSS","JavaScript"]
Tuple

Stores multiple values of different types.

let student: [number, string] = [101, "Akash"];

console.log(student);

Output

[101,"Akash"]
Enum

Represents a fixed set of named constants.

enum Status {

    Pending,

    Approved,

    Rejected

}

console.log(Status.Approved);

Output

1
Any

Allows any type of value.

let data: any;

data = 100;

data = "Angular";

data = true;

console.log(data);

Output

true

Use any sparingly because it disables type checking.

Void

Used for functions that do not return any value.

function greet(): void {

    console.log("Welcome");

}

greet();

Output

Welcome

Functions
What is a Function?
Definition

A function is a reusable block of code designed to perform a specific task. Instead of writing the same code multiple times, you define it once and call it whenever needed.

Why Use Functions?
Reusability
Better readability
Easier maintenance
Modular code

Angular components and services are largely collections of functions (methods).

1. Function Declaration
function greet(){

    console.log("Welcome to TypeScript");

}

greet();

Output

Welcome to TypeScript
2. Function with Parameters
function add(a:number,b:number){

    console.log(a+b);

}

add(10,20);

Output

30
3. Function with Return Type
function multiply(a:number,b:number):number{

    return a*b;

}

let result=multiply(5,10);

console.log(result);

Output

50
4. Function Expression
const greet=function(){

    console.log("Hello");

};

greet();
5. Arrow Function
Definition

An arrow function is a shorter syntax for writing functions. It also preserves the surrounding this context, which is very useful in Angular.

const square=(num:number):number=>{

    return num*num;

};

console.log(square(5));

Output

25
Angular Use Case
employees.forEach(emp=>console.log(emp.name));

Arrow functions are commonly used in subscriptions, callbacks, and array methods.

6. Optional Parameters
function display(name:string,city?:string){

    console.log(name);

    console.log(city);

}

display("Akash");

Output

Akash
undefined
7. Default Parameters
function welcome(name:string="Guest"){

    console.log(name);

}

welcome();

welcome("Akash");

Output

Guest
Akash
8. Rest Parameters
function sum(...numbers:number[]){

    let total=0;

    for(let n of numbers){

        total+=n;

    }

    return total;

}

console.log(sum(10,20,30,40));

Output

100
9. Callback Functions
Definition

A callback function is a function passed as an argument to another function. It allows one function to execute another after completing its task.

Example
function process(callback:()=>void){

    console.log("Processing...");

    callback();

}

process(()=>{

    console.log("Completed");

});

Output

Processing...
Completed
Angular Use Case

Callbacks are used in event handlers and asynchronous operations.

What is Object-Oriented Programming (OOP)?
Definition

Object-Oriented Programming (OOP) is a programming paradigm that organizes software into objects. Each object contains data (properties) and behavior (methods).

1. Class
Definition

A class is a blueprint used to create objects. It defines the properties and methods that objects will have.

Syntax
class ClassName{

    properties;

    methods(){

    }

}
Working Example
class Employee{

    id:number = 101;
    name:string = "Akash";
    salary:number = 50000;

    display():void{

        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);

    }

}

let emp = new Employee();

emp.display();
Output
101
Akash
50000
Angular Use Case

Every Angular component is a class.

export class EmployeeComponent{

}
2. Object
Definition

An object is an instance of a class. It contains actual values for the properties defined in the class.

Working Example
class Student{

    name:string = "Rahul";

}

let s1 = new Student();

console.log(s1.name);
Output
Rahul
Angular Use Case
let employee = {

   id:101,

   name:"Akash"

};

API responses are usually converted into objects.

3. Constructor
Definition

A constructor is a special method that is automatically called when an object is created. It is used to initialize object properties.

Working Example
class Employee{

    constructor(){

        console.log("Object Created");

    }

}

let emp = new Employee();
Output
Object Created
Parameterized Constructor
class Employee{

    constructor(

        public id:number,

        public name:string,

        public salary:number

    ){

    }

    display(){

        console.log(this.id);

        console.log(this.name);

        console.log(this.salary);

    }

}

let emp = new Employee(101,"Akash",50000);

emp.display();
Angular Use Case

Angular uses constructors for Dependency Injection.

constructor(private http: HttpClient){

}

Angular automatically injects the required service.

4. Access Modifiers

Access modifiers control the visibility of class members.

Public

Accessible from anywhere.

class Employee{

    public name="Akash";

}

let emp=new Employee();

console.log(emp.name);
Private

Accessible only inside the same class.

class Employee{

    private salary=50000;

}

Attempting to access salary outside the class results in a compilation error.

Protected

Accessible within the class and its subclasses.

class Person{

    protected city="Pune";

}

class Employee extends Person{

    display(){

        console.log(this.city);

    }

}

5. Encapsulation
Definition

Encapsulation means binding data and methods together while restricting direct access to internal data.

Example
class BankAccount{

    private balance:number = 10000;

    deposit(amount:number){

        this.balance += amount;

    }

    getBalance(){

        return this.balance;

    }

}

let account = new BankAccount();

account.deposit(5000);

console.log(account.getBalance());
Output
15000

Users cannot directly modify balance.

Angular Use Case

Services often keep data private and expose public methods to interact with it.

6. Inheritance
Definition

Inheritance allows a child class to reuse properties and methods from a parent class.

Example
class Animal{

    eat(){

        console.log("Eating");

    }

}

class Dog extends Animal{

    bark(){

        console.log("Barking");

    }

}

let dog=new Dog();

dog.eat();

dog.bark();
Output
Eating
Barking
Angular Use Case
class BaseComponent{

    loading:boolean=false;

}

class EmployeeComponent extends BaseComponent{

}
7. Polymorphism
Definition

Polymorphism means one method can have different implementations in different classes.

Method Overriding
class Animal{

    sound(){

        console.log("Animal Sound");

    }

}

class Dog extends Animal{

    sound(){

        console.log("Bark");

    }

}

let animal=new Dog();

animal.sound();
Output
Bark
Angular Use Case

Components can override methods from a shared base component.

8. Abstraction
Definition

Abstraction hides implementation details and exposes only the essential functionality.

Abstract Class
abstract class Shape{

    abstract area():number;

}
Example
abstract class Shape{

    abstract area():number;

}

class Circle extends Shape{

    area():number{

        return 3.14*5*5;

    }

}

let circle=new Circle();

console.log(circle.area());
Output
78.5
Angular Use Case

Base services or reusable components are often designed as abstract classes.

9. Interface
Definition

An interface defines the structure that an object or class must follow. It specifies what members exist, not how they are implemented.

Example
interface Employee{

    id:number;

    name:string;

    salary:number;

}

let emp:Employee={

    id:101,

    name:"Akash",

    salary:50000

};

console.log(emp);
Interface with Class
interface Animal{

    sound():void;

}

class Dog implements Animal{

    sound(){

        console.log("Bark");

    }

}

let dog=new Dog();

dog.sound();
Output
Bark
Angular Use Case
export interface Product{

    id:number;

    name:string;

    price:number;

}

Used to define the shape of API responses.

Real-Time Example – Employee Management
interface Employee {

    id:number;
    name:string;
    salary:number;

}

class EmployeeService {

    private employees:Employee[] = [];

    addEmployee(employee:Employee):void{

        this.employees.push(employee);

    }

    displayEmployees():void{

        this.employees.forEach(emp=>{

            console.log(emp.id);
            console.log(emp.name);
            console.log(emp.salary);
            console.log("----------------");

        });

    }

}

const service = new EmployeeService();

service.addEmployee({
    id:101,
    name:"Raj",
    salary:50000
});

service.addEmployee({
    id:102,
    name:"Rahul",
    salary:45000
});

service.displayEmployees();

Modules

Definition


module is a collection of variable, function, classes which have same name but different purpose. 

a.ts    a is consider as module 

export function display1() {
    console.log("display1 function part of a.ts file")
}


b.ts 
export function display2() {
    console.log("display2 function part of b.ts file")
}

main.ts         entry of the application 
import {display1} from './a.ts';

display1()
display2();




Modules organize code into separate files, 
making large applications easier to manage and maintain.

Why Use Modules?
Code reusability
Better organization
Easier maintenance
Avoid global variables
Example
employee.ts
export class Employee{

    constructor(
        public id:number,
        public name:string
    ){}

}
app.ts
import {Employee} from "./employee";

let emp=new Employee(101,"Akash");

console.log(emp);

Angular Use Case

Angular uses ES Modules extensively:

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

Optional Chaining
Definition

Optional chaining (?.) safely accesses nested properties without causing errors if a value is null or undefined.

Example
let employee:any={};

console.log(employee.address?.city);
Output
undefined

Without optional chaining, accessing employee.address.city would throw an error.

Angular Use Case

Safely displaying API data that may not be available immediately.

Spread Operator
Definition

The spread operator (...) expands elements from arrays or objects.

Example
let frontend=["HTML","CSS"];

let fullstack=[...frontend,"Angular"];

console.log(fullstack);
Output
["HTML","CSS","Angular"]
Angular Use Case

Creating updated copies of arrays or objects without modifying the original.

9. Rest Operator
Definition

The rest operator (...) collects multiple values into a single array parameter.

Example
function total(...marks:number[]){

    let sum=0;

    for(let m of marks){

        sum+=m;

    }

    return sum;

}

console.log(total(10,20,30));
Output
60


JavaScript : 
DOM : document object model 
DOM Operation or DOM Parser :
Read, Write and Update html contents dynamically. 
document.getElementById
document.getElementByTagName
document.getElementByCSSName

JavaScript providing lot of pre defined library or framework which help to read, write and update 
effectively. 

jQuery 
Angular JS

Angular Framework 
React JS
Vue JS

Angular Framework Vs React JS 

library Vs Framework 

Angular Framework – 12 to 16

What is Angular?
Definition

Angular is an open-source, component-based front-end framework 
developed and maintained by Google. 
It is used to build Single Page Applications (SPAs) using TypeScript.

multi page application 

index.html                                  welcome.html 

hyper link 
form with submit 
using js code 

single page application 

AJAX 

Angular provides a complete solution for building modern, scalable, maintainable, and enterprise-level web applications.

Simple Definition

Angular is a framework that helps developers build fast, interactive, and enterprise-level web applications using TypeScript.

Real-Life Example

Think of building a house.

HTML → Bricks (Structure)
CSS → Paint & Interior Design
JavaScript → Electricity & Plumbing (Behavior)
TypeScript → Building Rules & Safety Standards
Angular → Complete Construction Company that manages everything



Angular doesn't just provide one feature—it gives you everything needed to build a complete application.

2. Why Angular?

As applications become larger, using only HTML, CSS, and JavaScript becomes difficult because developers must manage routing, data flow, validation, HTTP communication, testing, and project organization themselves.

Angular solves these problems by providing built-in support for:

Component-Based Development
Routing
Forms
HTTP Client
Dependency Injection
Lazy Loading
Testing
Security
State Management (through libraries)
TypeScript Integration

Features of Angular
1. Component-Based Architecture

Applications are divided into small reusable components.

Example:

Application

├── Header Component
├── Menu Component
├── Home Component
├── Product Component
├── Footer Component
2. TypeScript Support

Angular is completely developed using TypeScript.

Benefits:

Static Typing
OOP
Interfaces
Better IDE Support
3. Two-Way Data Binding

Automatically synchronizes data between the component and the HTML template.

Example:

Textbox
      ⇅
Component Variable
4. Dependency Injection

Angular automatically creates and injects required objects.

Example:

constructor(private http: HttpClient){}

No need to manually create objects using new.

5. Routing

Angular allows navigation between different pages without reloading the browser.

Example:

Home

Products

About

Contact
6. Directives

Directives change the behavior or appearance of HTML elements.

Examples:

*ngIf
*ngFor
[ngClass]
7. Pipes

Pipes transform data before displaying it.

Examples:

uppercase

lowercase

currency

date

percent
8. Forms

Angular supports:

Template-Driven Forms
Reactive Forms
9. HTTP Client

Angular communicates with REST APIs using the HttpClient.

10. Testing Support

Angular includes support for:

Unit Testing
End-to-End Testing

What is SPA (Single Page Application)?
Definition

A Single Page Application (SPA) loads a single HTML page initially and dynamically updates the content without refreshing the entire page.

Traditional Website
Browser

↓

Home.html

↓

Refresh

↓

About.html

↓

Refresh

↓

Contact.html

↓

Refresh

Every page request reloads the browser.

Angular SPA
Browser

↓

index.html

↓

Angular Loads

↓

Home Component

↓

Products Component

↓

About Component

↓

Contact Component

The browser is not refreshed when navigating between pages.

Benefits of SPA
Faster
Better User Experience
Less Server Load
Smooth Navigation
Better Performance

Angular Architecture
Browser
    │
index.html
    │
main.ts
    │
AppModule
    │
AppComponent
    │
──────────────────────────────
│            │              │
Header     Home        Footer
Component  Component   Component
                │
           Employee Component
                │
         Employee Service
                │
          HttpClient
                │
           REST API
                │
           Database


Installing Angular 12
Step 1: Install Node.js (18.10 version)


Verify installation

node -v
npm -v
Step 2: Install Angular CLI Version 12/16

npm install -g @angular/cli@16

Verify:

ng version

Example Output:

Angular CLI: 12.x.x
Node: xx.x.x
Package Manager: npm

11. Create Your First Angular Project
ng new welcome_app (project name)


Angular asks:

Would you like to add Angular Routing?

Choose:

Yes

Next:

Which stylesheet format?

Choose:

CSS
12. Open Project
cd employee-management
13. Run Angular Application
ng serve

or

    ng serve --open (default port number is 4200)
    ng serve --open --port 4300
Open:

http://localhost:4200

Angular welcome page appears.

14. Angular Project Structure
employee-management

│
├── node_modules
├── src
│
│   ├── app
│   │
│   ├── assets
│   ├── environments
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
└── package-lock.json
15. Important Files



| File                 | Purpose                           |
| -------------------- | --------------------------------- |
| `main.ts`            | Application entry point           |
| `app.module.ts`      | Root module                       |
| `app.component.ts`   | Root component logic              |
| `app.component.html` | Root component UI                 |
| `app.component.css`  | Root component styles             |
| `index.html`         | Main HTML page                    |
| `angular.json`       | Angular project configuration     |
| `package.json`       | Project dependencies and scripts  |
| `tsconfig.json`      | TypeScript compiler configuration |


16. Common Angular CLI Commands
| Command                           | Description            |
| --------------------------------- | ---------------------- |
| `ng new project-name`             | Create a new project   |
| `ng serve`                        | Run development server |
| `ng serve --open`                 | Run and open browser   |
| `ng build`                        | Build the application  |
| `ng test`                         | Run unit tests         |
| `ng generate component home`      | Generate a component   |
| `ng generate service employee`    | Generate a service     |
| `ng generate module admin`        | Generate a module      |
| `ng generate directive highlight` | Generate a directive   |
| `ng generate pipe salary`         | Generate a pipe        |


Angular Components

What is a Component?
Definition

A Component is the basic building block of an Angular application. It controls a part of the user interface (UI) and contains the HTML, CSS, and TypeScript code required for that part of the application.

Each component is responsible for a specific feature or section of the application.

Simple Definition

A Component is a small reusable UI block.

Real-Life Example

Think about an e-commerce website.

The homepage contains:

Header

Menu

Banner

Products

Offers

Footer

Instead of writing everything in one file, Angular divides the application into reusable components.

App Component
│
├── Header Component
├── Menu Component
├── Banner Component
├── Product Component
├── Offer Component
└── Footer Component

Each component performs one specific task.

Why Components?

Without Components

One HTML File

1000+
Lines

↓

Difficult to Manage

With Components

Header

↓

Menu

↓

Products

↓

Footer

Each component can be developed independently.

Advantages of Components
Reusable
Easy to Maintain
Easy to Test
Better Code Organization
Faster Development
Independent Development
Easier Debugging
Angular Component Architecture
Component

│

├── TypeScript (.ts)
│      Business Logic
│
├── HTML (.html)
│      User Interface
│
├── CSS (.css)
│      Styling
│
└── Test (.spec.ts)
       Unit Testing
Component Files

Suppose we create a component named Employee.

Angular creates

employee.component.ts

employee.component.html

employee.component.css

employee.component.spec.ts
Component Relationship
Component (.ts)

↓

Template (.html)

↓

Browser

The component sends data to the template.

2. Creating a Component
Using Angular CLI

ng generate component employee

Shortcut

ng g c employee

Angular automatically creates

employee

│

├── employee.component.ts

├── employee.component.html

├── employee.component.css

└── employee.component.spec.ts
3. Understanding the Component Class

Example

import { Component } from '@angular/core';

@Component({

  selector: 'app-employee',

  templateUrl: './employee.component.html',

  styleUrls: ['./employee.component.css']

})

export class EmployeeComponent {

}
Explanation
Import Statement
import { Component } from '@angular/core';

Imports the Component decorator.

Component Decorator
@Component({

})

Tells Angular that this class is a Component.

Selector
selector:'app-employee'

Used as an HTML tag.

<app-employee></app-employee>
Template URL
templateUrl:'./employee.component.html'

Links the HTML file.

Style URL
styleUrls:['./employee.component.css']

Links the CSS file.

Component Class
export class EmployeeComponent{

}

Contains

Variables
Methods
Business Logic
Component Life Cycle

When Angular creates a component

Create Component

↓

Load Template

↓

Load CSS

↓

Display UI
First Component Example
employee.component.ts
import { Component } from '@angular/core';

@Component({

selector:'app-employee',

templateUrl:'./employee.component.html',

styleUrls:['./employee.component.css']

})
export class EmployeeComponent{
employeeName="Akash";
salary=50000;
}

employee.component.html
<h2>Employee Details</h2>
<p>Name : {{employeeName}}</p>
<p>Salary : {{salary}}</p>


Output
Employee Details

Name : Akash

Salary : 50000
Component with Method
employee.component.ts
import { Component } from '@angular/core';

@Component({

selector:'app-employee',

templateUrl:'./employee.component.html'

})

export class EmployeeComponent{

message="";

showMessage(){

this.message="Welcome to Angular";

}

}
employee.component.html
<button (click)="showMessage()">

Click Here

</button>

<h3>{{message}}</h3>
Output
Click Here

↓

Welcome to Angular
Component with Array
employees=[

"Akash",

"Rahul",

"Neha"

];

HTML

<ul>

<li *ngFor="let emp of employees">

{{emp}}

</li>

</ul>

Output

Akash

Rahul

Neha
Root Component
app.component

Application starts from here.

main.ts

↓

AppModule

↓

AppComponent

↓

Browser
Child Component

Example

Header

Footer

Product

Employee

Dashboard

All are child components.

Root vs Child Component
Root	Child
Starts application	Used inside another component
Only one	Multiple
AppComponent	HeaderComponent
Reusing Components
<app-header></app-header>

<app-menu></app-menu>

<app-product></app-product>

<app-footer></app-footer>
Component Hierarchy
App Component

│

├── Header

├── Menu

├── Dashboard

│      ├── Employee

│      ├── Product

│      └── Customer

└── Footer
Component Communication

Angular components communicate in three ways.

Parent

↓

@Input()

↓

Child

↑

@Output()

↑

Parent

Later chapters cover this in detail.

Component Life Cycle Hooks

Angular provides lifecycle methods.

Constructor

↓

ngOnChanges()

↓

ngOnInit()

↓

ngDoCheck()

↓

ngAfterContentInit()

↓

ngAfterContentChecked()

↓

ngAfterViewInit()

↓

ngAfterViewChecked()

↓

ngOnDestroy()

For beginners, remember:

Constructor

↓

ngOnInit()

↓

Application Running

↓

ngOnDestroy()
Real-Time Project Structure
Employee Management

App

│

├── Login

├── Dashboard

├── Employee

├── Department

├── Salary

├── Report

└── Footer

Every page is a component.

Angular Component Flow
Browser

↓

App Component

↓

Employee Component

↓

Employee HTML

↓

Employee CSS

↓

Display

Data Binding

1. What is Data Binding?
Definition

Data Binding is the process of connecting data between the Component (TypeScript) and the Template (HTML). It allows data to flow from the component to the view, from the view to the component, or in both directions.

Why Do We Need Data Binding?

Without Data Binding:

HTML cannot display dynamic values.
User input cannot update the component.
Every change would require manual DOM manipulation using JavaScript.

With Data Binding:

The UI automatically reflects component data.
User actions update the component easily.
Less code and better maintainability.
Real-Life Example

Think of an ATM machine.

Account Balance
       │
       ▼
ATM Screen

When the balance changes, the screen updates automatically.

Similarly:

Component (TypeScript)
        ⇅
Data Binding
        ⇅
HTML Template
Types of Data Binding

Angular provides four main types of data binding.

                 Data Binding

                     │

      ┌──────────────┼──────────────┐

      ▼              ▼              ▼

Interpolation   Property Binding   Event Binding

                     │

                     ▼

             Two-Way Binding
1. Interpolation
Definition

Interpolation displays data from the component in the HTML template using double curly braces.

{{ }}
Data Flow
Component  ─────────► HTML

One-Way Binding

Syntax
{{ variableName }}
Example
app.component.ts
export class AppComponent{

    companyName="Open Learning";

}
app.component.html
<h2>{{companyName}}</h2>
Output
Open Learning
Multiple Variables
export class AppComponent{

    firstName="Akash";

    lastName="Kale";

}

HTML

<h2>{{firstName}} {{lastName}}</h2>

Output

Akash Kale
Expressions

Interpolation supports expressions.

age=30;

HTML

<h3>{{age+5}}</h3>

Output

35
Angular Use Case
{{employee.name}}

{{employee.salary}}

{{product.price}}
2. Property Binding
Definition

Property Binding binds a component value to an HTML element property.

Data Flow
Component ─────► HTML Property
Syntax
[property]="value"
Example
app.component.ts
imageUrl="assets/angular.png";
app.component.html
<img [src]="imageUrl" width="200">

Output

Image displayed.

Button Example
isDisabled=true;

HTML

<button [disabled]="isDisabled">

Save

</button>

Output

Disabled button.

Angular Use Cases
<img [src]="image">

<input [value]="username">

<button [disabled]="loading">

<div [hidden]="isHidden">
3. Event Binding
Definition

Event Binding executes a component method when an event occurs.

Data Flow
HTML Event ─────► Component
Syntax
(event)="method()"
Example
app.component.ts
message="";

showMessage(){

this.message="Welcome to Angular";

}
app.component.html
<button (click)="showMessage()">

Click

</button>

<h2>{{message}}</h2>
Output
Click Button

↓

Welcome to Angular
Mouse Event
<button

(mouseover)="showMessage()">

Move Mouse

</button>
Keyboard Event
<input

(keyup)="showMessage()">
Common Events
Event	Description
click	Mouse click
dblclick	Double click
keyup	Key released
keydown	Key pressed
mouseover	Mouse enters
mouseout	Mouse leaves
submit	Form submitted
change	Value changed
focus	Input gains focus
blur	Input loses focus
Event Object
<input

(keyup)="show($event)">
show(event:any){

console.log(event.target.value);

}
4. Two-Way Binding
Definition

Two-Way Binding synchronizes data between the component and the HTML automatically.

Component

⇅

HTML
Why Use Two-Way Binding?

When the user changes the value in the UI, the component updates automatically. When the component value changes, the UI also updates.

Syntax
[(ngModel)]
Step 1

Import FormsModule.

imports:[
FormsModule
]
Step 2

Component

name="Akash";
HTML
<input

[(ngModel)]="name">

<h2>{{name}}</h2>
Output

Typing in the textbox immediately updates the heading.

Two-Way Binding Flow
Textbox

⇅

Component Variable

⇅

HTML
Comparison of Data Binding Types
Type	Syntax	Direction
Interpolation	{{ }}	Component → HTML
Property Binding	[ ]	Component → HTML
Event Binding	( )	HTML → Component
Two-Way Binding	[()]	Both Directions
Attribute Binding
Example
colspan=2;

HTML

<td [attr.colspan]="colspan">

Employee

</td>
Class Binding
isActive=true;

HTML

<div

[class.active]="isActive">

Angular

</div>
Style Binding
textColor="red";

HTML

<h2

[style.color]="textColor">

Angular

</h2>
Real-Time Example
app.component.ts
export class AppComponent{

employeeName="Akash";

salary=50000;

isDisabled=false;

save(){

alert("Employee Saved");

}

}
app.component.html
<h2>{{employeeName}}</h2>

<p>{{salary}}</p>

<button

[disabled]="isDisabled"

(click)="save()">

Save

</button>
Mini Project – Student Registration
app.component.ts
studentName="";

course="";
app.component.html
<h2>Student Registration</h2>

<input

[(ngModel)]="studentName"

placeholder="Student Name">

<br><br>

<input

[(ngModel)]="course"

placeholder="Course">

<hr>

<h3>Student Details</h3>

<p>Name : {{studentName}}</p>

<p>Course : {{course}}</p>
Output

As the user types in the text boxes, the displayed student name and course update immediately.

Data Binding Flow in Angular
User

↓

HTML

↓

Event Binding

↓

Component

↓

Variables Updated

↓

Interpolation

↓

UI Updated



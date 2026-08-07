Angular Data Binding

What is Data Binding?

Data Binding is the process of connecting the 
Component (TypeScript) with the View (HTML Template). 
It allows data to flow between the component and the 
user interface.

Display data from the component to the HTML page.
Send data from the HTML page to the component.
Synchronize data between the component and the view.

Types of Data Binding

Angular provides 4 types of Data Binding.

                  Angular Data Binding

                    Data Binding
                         |
        -------------------------------------
        |         |          |              |
   Interpolation Property   Event     Two-Way
      Binding     Binding   Binding    Binding
        {{ }}        []        ()        [()]

Starting 3 are also known as 1 way data binding 

| Data Binding     | Direction        | Syntax      |
| ---------------- | ---------------- | ----------- |
| Interpolation    | Component → HTML | {{ }}       |
| Property Binding | Component → HTML | [property]  |
| Event Binding    | HTML → Component | (event)     |
| Two-Way Binding  | Both Directions  | [(ngModel)] |


1. Interpolation Binding
Definition

Interpolation displays data from the component into HTML 
using double curly braces.

Syntax
{{ expression }}

Direction

Component  -------------> HTML
Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  companyName:any = "OpenAI";

  trainer = "Akash";

  course = "Angular";

  fees = 25000;

  isAvailable = true;

}

HTML

<h2>{{companyName}}</h2>

<h2>{{trainer}}</h2>

<h2>{{course}}</h2>

<h2>{{fees}}</h2>

<h2>{{isAvailable}}</h2>

Output
OpenAI

Akash

Angular

25000

true
Expressions
age = 30;

{{ age + 10 }}

{{ 100 * 5 }}

{{ age > 18 }}

{{ age == 30 }}

Output

40

500

true

true
Calling Method

firstName="Akash";
lastName="Kale";

getFullName(){
   return this.firstName+" "+this.lastName;
}

from html we can call function part of components. 

{{getFullName()}}

Output

Akash Kale


2. Property Binding
Definition

Property Binding binds a component property to an HTML element property.

Syntax
[property]="value"

Direction

Component -------------> HTML
Component

imageURL="assets/angular.png";
imageWidth=200;
isDisabled=false;


placeHolder="Enter Name";
HTML
Image

{{}}

<img src="image.jpg"> in html 

<img [src]="imageURL" [width]="imageWidth">

Disable Button
<button [disabled]="isDisabled">
Save
</button>

Placeholder
<input type="text"
       [placeholder]="placeHolder">
Dynamic Style
color="red";
<h2 [style.color]="color">
Angular Data Binding
</h2>
Dynamic Class
success=true;
<h2 [class.text-success]="success">
Completed
</h2>

CSS

.text-success{
    color:green;
}

Event Binding
Definition

Event Binding sends information from HTML to the
 Component whenever an event occurs.

in JS and html web page 
demo.js 
function fun() {
  alert("Welcome")
}

html 

<input type="button" value="click here" onClick="fun1()">


js event                    angular event 
onclick                     (click)

Syntax
(event)="method()"

Direction

HTML -------------> Component
Component

message="";

showMessage(){

   this.message="Welcome to Angular";

}
HTML
<button (click)="showMessage()">

Click Here

</button>

<h2>{{message}}</h2>

Output

Initially

(empty)

After Click

Welcome to Angular
Passing Parameter
display(name:string){

 alert(name);

}
<button
(click)="display('Akash')">

Click

</button>
Keyboard Event
showValue(value:string){

console.log(value);

}
<input
#txt
(keyup)="showValue(txt.value)">
Mouse Events
<button (mouseover)="showMessage()">

Mouse Over

</button>

<button (mouseleave)="showMessage()">

Mouse Leave

</button>
4. Two-Way Binding
Definition

Two-Way Binding provides synchronization between the component and HTML.

Whenever the user changes the value, the component is updated automatically.

Whenever the component changes the value, the HTML is updated automatically.

Syntax
[(ngModel)]

Direction

Component <-------------> HTML
Step 1

Import FormsModule

import { FormsModule } from '@angular/forms';

Standalone Component Example:

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
}

NgModule-based Angular 16 Project:

@NgModule({
  imports:[
      BrowserModule,
      FormsModule
  ]
})
export class AppModule{
}
Component
name="Akash";
HTML
<input
type="text"
[(ngModel)]="name">

<h2>{{name}}</h2>

Output

Initially

Akash

User types

Akash Kale

Output

Akash Kale

Automatically updated.


Real-Time Example: Student Registration Portal

Project Output

--------------------------------------------------------
         Student Registration Portal
--------------------------------------------------------

Student Photo

Name      : [ Akash                     ]

Email     : [ akash@gmail.com           ]

Course    : Java Full Stack

Gender

( ) Male
( ) Female

[ Register ]

--------------------------------------------

Registration Details

Student Name : Akash
Email         : akash@gmail.com
Course        : Java Full Stack

Status : Registration Successful

--------------------------------------------

Step 1: Component

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  // Interpolation
  title = "Student Registration Portal";

  course = "Java Full Stack";

  // Property Binding
  studentImage = "assets/student.png";

  buttonDisabled = false;

  // Two Way Binding
  studentName = "";

  email = "";

  gender = "";

  // Event Binding
  message = "";

  registerStudent(){

      this.message="Registration Successful";

      console.log(this.studentName);

      console.log(this.email);

  }

}

Step 2: HTML

<h1>{{title}}</h1>

<hr>

<img [src]="studentImage" width="150">

<br><br>

<label>Name</label>

<input
type="text"
[(ngModel)]="studentName">

<br><br>

<label>Email</label>

<input
type="email"
[(ngModel)]="email">

<br><br>

<label>Gender</label>

<input
type="radio"
name="gender"
value="Male"
[(ngModel)]="gender"> Male

<input
type="radio"
name="gender"
value="Female"
[(ngModel)]="gender"> Female

<br><br>

<p>

Course :
{{course}}

</p>

<button
[disabled]="buttonDisabled"
(click)="registerStudent()">

Register

</button>

<hr>

<h2>Registration Details</h2>

Student Name :
{{studentName}}

<br>

Email :
{{email}}

<br>

Gender :
{{gender}}

<br>

Course :
{{course}}

<br><br>

{{message}}


Angular Directives
What is a Directive?

A Directive is a special class in Angular that allows you to change the appearance, 
behavior, or structure of HTML elements.



In simple words:

Directives are instructions that tell Angular how to render or manipulate HTML elements.


Types of Directives

Angular provides 3 types of directives.

                  Angular Directives
                         |
       ----------------------------------------
       |                  |                   |
  Component          Structural          Attribute
  Directive          Directive           Directive

  | Directive Type           | Purpose                                                   | Examples                        |
| ------------------------ | --------------------------------------------------------- | ------------------------------- |
| **Component Directive**  | Creates a reusable UI component                           | `@Component`                    |
| **Structural Directive** | Adds, removes, or changes the layout of DOM elements      | `*ngIf`, `*ngFor`, `*ngSwitch`  |
| **Attribute Directive**  | Changes the appearance or behavior of an existing element | `ngClass`, `ngStyle`, `ngModel` |




1. Component Directive
Definition

A Component Directive is the most commonly used directive in Angular.

A component consists of:

HTML Template
TypeScript Class
CSS
Metadata

Every Angular component is actually a directive with a template.

Example
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
}

Usage

<app-student></app-student>
Real-Time Example

In an E-Commerce application:

Home Page

│
├── Header Component
├── Menu Component
├── Product Component
├── Cart Component
├── Footer Component

Each section is a Component Directive.

2. Structural Directive
Definition

Structural Directives change the structure of the DOM.

They can:

Create elements
Remove elements
Repeat elements

Structural directives always start with *.

Examples:

*ngIf
*ngFor
*ngSwitch
Real-Time Example

Login Screen

If the user is logged in

Welcome Akash

Logout

Otherwise

Login

Register

Angular decides which HTML should exist.

<div *ngIf="isLoggedIn">
   Welcome Akash
</div>
Another Example

Displaying products

products=[
'Laptop',
'Mouse',
'Keyboard'
];
<li *ngFor="let item of products">

{{item}}

</li>

Output

Laptop

Mouse

Keyboard

Angular creates three <li> elements automatically.

3. Attribute Directive
Definition

Attribute Directives change the appearance or behavior of an existing HTML element.

They do not create or remove elements.

Examples

ngClass
ngStyle
ngModel
Example 1: ngStyle

Component

color="red";

HTML

<h2 [ngStyle]="{'color':color}">

Angular

</h2>

Output

Angular

(Text appears in red.)

Example 2: ngClass

CSS

.success{
color:green;
font-weight:bold;
}

Component

isSuccess=true;

HTML

<h2
[ngClass]="{'success':isSuccess}">

Registration Successful

</h2>

Output

Registration Successful

(Green and bold.)

Example 3: ngModel
<input

[(ngModel)]="name">
name="Akash";

Whenever the user changes the textbox, the component value changes automatically.

Real-Time Example

Suppose we are building an Online Shopping Application.

----------------------------------

Product Name

Laptop

Price

₹65,000

Quantity

[ 1 ]

[ Add to Cart ]

----------------------------------
Component Directive
<ProductComponent>

Displays the complete product card.
Structural Directive

If the product is available

<div *ngIf="productAvailable">

Add to Cart

</div>

Otherwise

Out of Stock
Attribute Directive

If the product is on offer

<h2

[ngStyle]="{'color':'green'}">

₹65,000

</h2>

Highlight premium products

<div

[ngClass]="{'premium':isPremium}">

Laptop

</div>

Real-Time Example: Online Shopping Product Card
Scenario

You are developing an E-Commerce Application like Amazon or Flipkart.

Project Structure
src
 ├── app
 │     ├── product
 │     │      ├── product.component.ts
 │     │      ├── product.component.html
 │     │      ├── product.component.css

 Real-Time Project: E-Commerce Product Catalog
Scenario

You are developing an Online Shopping Application.

Project Structure
src
 ├── app
      ├── product
      │      product.component.ts
      │      product.component.html
      │      product.component.css


product.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products = [

    {
      id:101,
      name:'Apple iPhone 16 Pro',
      price:125000,
      discount:15,
      rating:4.8,
      stock:true,
      image:'assets/iphone.jpg'
    },

    {
      id:102,
      name:'Samsung Galaxy S25',
      price:95000,
      discount:10,
      rating:4.6,
      stock:false,
      image:'assets/samsung.jpg'
    },

    {
      id:103,
      name:'Sony Headphones',
      price:18000,
      discount:25,
      rating:4.5,
      stock:true,
      image:'assets/headphone.jpg'
    },

    {
      id:104,
      name:'Apple MacBook Pro',
      price:195000,
      discount:0,
      rating:4.9,
      stock:true,
      image:'assets/macbook.jpg'
    }

  ];

  addToCart(product:any){

      alert(product.name + " Added Successfully");

  }

}
product.component.html
<h1 class="title">

Angular Shopping Store

</h1>

<div class="container">

<div
class="card"

*ngFor="let product of products">

<img

[src]="product.image"

class="image">

<h2>

{{product.name}}

</h2>

<h3

[ngStyle]="{

'color':'green'

}">

₹ {{product.price}}

</h3>

<h4

*ngIf="product.discount>0"

class="discount">

{{product.discount}}% OFF

</h4>

<h4>

⭐ {{product.rating}}

</h4>

<p

[ngClass]="{

'available':product.stock,

'notAvailable':!product.stock

}">

{{product.stock ?

'In Stock'

:

'Out Of Stock'}}

</p>

<button

(click)="addToCart(product)"

[disabled]="!product.stock">

Add To Cart

</button>

</div>

</div>
product.component.css
body{

background:#f2f2f2;

}

.title{

text-align:center;

color:#0d47a1;

margin:20px;

}

.container{

display:flex;

flex-wrap:wrap;

justify-content:center;

gap:20px;

}

.card{

width:280px;

padding:20px;

background:white;

border-radius:10px;

box-shadow:0 2px 10px gray;

text-align:center;

transition:.3s;

}

.card:hover{

transform:scale(1.05);

}

.image{

width:180px;

height:180px;

object-fit:cover;

}

.discount{

color:red;

font-weight:bold;

}

.available{

color:green;

font-weight:bold;

}

.notAvailable{

color:red;

font-weight:bold;

}

button{

background:#1976d2;

color:white;

padding:10px 20px;

border:none;

border-radius:5px;

cursor:pointer;

}

button:hover{

background:#0d47a1;

}

button:disabled{

background:gray;

cursor:not-allowed;

}
Output
---------------------------------------------------------------

              Angular Shopping Store

---------------------------------------------------------------

 -----------------      -----------------

 Apple iPhone          Samsung Galaxy

 ₹125000               ₹95000

 15% OFF               10% OFF

 ⭐4.8                  ⭐4.6

 In Stock              Out Of Stock

 [Add To Cart]         [Disabled]

---------------------------------------------------------------

 -----------------      -----------------

 Sony Headphone        Apple MacBook

 ₹18000               ₹195000

 25% OFF

 ⭐4.5                 ⭐4.9

 In Stock             In Stock

 [Add To Cart]        [Add To Cart]

---------------------------------------------------------------
Which Directive is Used?
1. Component Directive
<app-product></app-product>

The entire shopping page is created as a reusable component.

2. Structural Directive (*ngFor)
<div
class="card"
*ngFor="let product of products">

Instead of writing four product cards manually,

Angular automatically creates one card for every product.

Products Array

↓

Product 1

↓

Product 2

↓

Product 3

↓

Product 4
3. Structural Directive (*ngIf)
<h4
*ngIf="product.discount>0">

{{product.discount}}% OFF

</h4>

Only products having a discount display the OFF badge.

For the MacBook, where discount = 0, nothing is displayed.

4. Attribute Directive (ngClass)
<p

[ngClass]="{

'available':product.stock,

'notAvailable':!product.stock

}">

If the product is available:

In Stock

appears in green.

Otherwise:

Out Of Stock

appears in red.

5. Attribute Directive (ngStyle)
<h3

[ngStyle]="{

'color':'green'

}">

Displays the product price in green.

You can also make it dynamic:

<h3
[ngStyle]="{
'color': product.price > 100000 ? 'red' : 'green'
}">
₹ {{product.price}}
</h3>

Premium products become red, while affordable products remain green.

6. Property Binding
<button

[disabled]="!product.stock">

If the product is unavailable:

stock=false

Angular automatically disables the button.

7. Event Binding
<button

(click)="addToCart(product)">

When the user clicks Add To Cart, Angular calls:

addToCart(product){
    alert(product.name + " Added Successfully");
}
Complete Directive Flow
                    ProductComponent
                           │
                           ▼
                 products[] (Array)
                           │
          ┌────────────────┴─────────────────┐
          │                                  │
      *ngFor                          Creates Product Cards
          │
          ▼
   Apple iPhone
   Samsung Galaxy
   Sony Headphones
   Apple MacBook
          │
          ▼
     *ngIf
     │
     ├── Show Discount
     └── Hide Discount
          │
          ▼
      ngClass
     │
     ├── Green → In Stock
     └── Red → Out Of Stock
          │
          ▼
      ngStyle
     │
     └── Price Color
          │
          ▼
      [disabled]
     │
     ├── Enable Button
     └── Disable Button
          │
          ▼
     (click)
          │
          ▼
    addToCart(product)



Angular Forms - Complete Concept
What is an Angular Form?

An Angular Form is a mechanism used to collect, validate, process, and submit user input in an Angular application.

It acts as a bridge between the User Interface (HTML) and the Application Logic (TypeScript).

Simple Definition

An Angular Form is used to collect user information, validate the entered data, and submit it to the server or database.

Types of Angular Forms

Angular provides two types of forms.

                  Angular Forms
                         │
          ┌──────────────┴──────────────┐
          │                             │
Template-Driven Form           Reactive Form

1. Template-Driven Forms
Definition

A Template-Driven Form is created mainly using HTML.

Angular automatically creates and manages the form.

It uses:

FormsModule
ngModel
ngForm
Best For
Login Page
Contact Form
Feedback Form
Student Registration
Small Applications

2. Reactive Forms
Definition

A Reactive Form is created and managed using TypeScript.

The developer explicitly creates the form structure using:

FormGroup
FormControl
Validators
Best For
Banking Systems
E-Commerce
Hospital Management
ERP
CRM
Enterprise Applications

1. login-tdf.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-tdf',
  templateUrl: './login-tdf.component.html',
  styleUrls: ['./login-tdf.component.css']
})
export class LoginTdfComponent {

  login = {

    email: '',

    password: ''

  };

  loginUser(loginForm: any) {

    console.log(this.login);

    if (this.login.email === 'admin@gmail.com' &&
        this.login.password === 'admin123') {

      alert("Login Successful");

    } else {

      alert("Invalid Email or Password");

    }

    loginForm.resetForm();

  }

}
2. login-tdf.component.html
<div class="container">

    <h2>Template Driven Form Login</h2>

    <form
          #loginForm="ngForm"
          (ngSubmit)="loginUser(loginForm)">

        <label>Email</label>

        <input
                type="email"
                name="email"
                required
                email
                [(ngModel)]="login.email"
                #email="ngModel">

        <small
                class="error"
                *ngIf="email.invalid && email.touched">

            Enter Valid Email

        </small>

        <label>Password</label>

        <input
                type="password"
                name="password"
                required
                minlength="6"
                [(ngModel)]="login.password"
                #password="ngModel">

        <small
                class="error"
                *ngIf="password.invalid && password.touched">

            Password must contain minimum 6 characters

        </small>

        <button
                type="submit"
                [disabled]="loginForm.invalid">

            Login

        </button>

    </form>

</div>
3. login-tdf.component.css
body{

    background:#f2f2f2;

    font-family:Arial;

}

.container{

    width:400px;

    margin:40px auto;

    padding:20px;

    border-radius:10px;

    background:white;

    box-shadow:0px 0px 10px gray;

}

h2{

    text-align:center;

    color:#1565c0;

}

label{

    display:block;

    margin-top:15px;

    font-weight:bold;

}

input{

    width:100%;

    padding:10px;

    border:1px solid gray;

    border-radius:5px;

    margin-top:5px;

}

button{

    width:100%;

    margin-top:20px;

    padding:10px;

    border:none;

    background:#1565c0;

    color:white;

    border-radius:5px;

    cursor:pointer;

}

button:hover{

    background:#0d47a1;

}

button:disabled{

    background:gray;

}

.error{

    color:red;

    font-size:13px;

}
4. login-mdf.component.ts
import { Component } from '@angular/core';

import {

FormControl,

FormGroup,

Validators

} from '@angular/forms';

@Component({

selector:'app-login-mdf',

templateUrl:'./login-mdf.component.html',

styleUrls:['./login-mdf.component.css']

})

export class LoginMdfComponent{

loginForm=new FormGroup({

email:new FormControl('',[

Validators.required,

Validators.email

]),

password:new FormControl('',[

Validators.required,

Validators.minLength(6)

])

});

loginUser(){

console.log(this.loginForm.value);

const email=this.loginForm.value.email;

const password=this.loginForm.value.password;

if(email==="admin@gmail.com"

&&

password==="admin123"){

alert("Login Successful");

}else{

alert("Invalid Email or Password");

}

this.loginForm.reset();

}

}
5. login-mdf.component.html
<div class="container">

<h2>

Reactive Form Login

</h2>

<form

[formGroup]="loginForm"

(ngSubmit)="loginUser()">

<label>Email</label>

<input

type="email"

formControlName="email">

<small

class="error"

*ngIf="loginForm.controls['email'].invalid

&&

loginForm.controls['email'].touched">

Enter Valid Email

</small>

<label>Password</label>

<input

type="password"

formControlName="password">

<small

class="error"

*ngIf="loginForm.controls['password'].invalid

&&

loginForm.controls['password'].touched">

Password should contain minimum 6 characters

</small>

<button

type="submit"

[disabled]="loginForm.invalid">

Login

</button>

</form>

</div>
6. login-mdf.component.css
body{

    background:#f2f2f2;

    font-family:Arial;

}

.container{

    width:400px;

    margin:40px auto;

    padding:20px;

    border-radius:10px;

    background:white;

    box-shadow:0px 0px 10px gray;

}

h2{

    text-align:center;

    color:#1565c0;

}

label{

    display:block;

    margin-top:15px;

    font-weight:bold;

}

input{

    width:100%;

    padding:10px;

    border:1px solid gray;

    border-radius:5px;

    margin-top:5px;

}

button{

    width:100%;

    margin-top:20px;

    padding:10px;

    border:none;

    background:#1565c0;

    color:white;

    border-radius:5px;

    cursor:pointer;

}

button:hover{

    background:#0d47a1;

}

button:disabled{

    background:gray;

}

.error{

    color:red;

    font-size:13px;

}
app.component.html

To test the Template Driven Form:

<app-login-tdf></app-login-tdf>

To test the Reactive Form:

<app-login-mdf></app-login-mdf>
app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginTdfComponent } from './login-tdf/login-tdf.component';
import { LoginMdfComponent } from './login-mdf/login-mdf.component';

@NgModule({

  declarations: [

    AppComponent,

    LoginTdfComponent,

    LoginMdfComponent

  ],

  imports: [

    BrowserModule,

    FormsModule,

    ReactiveFormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

Side-by-Side Comparison

| Feature         | Template Driven Form (TDF) | Reactive Form (MDF)     |
| --------------- | -------------------------- | ----------------------- |
| Form Created In | HTML                       | TypeScript              |
| Module          | FormsModule                | ReactiveFormsModule     |
| Main Directive  | `ngModel`                  | `formControlName`       |
| Form Object     | `ngForm`                   | `FormGroup`             |
| Validation      | HTML Attributes            | Validators Class        |
| Data Binding    | Two-way (`ngModel`)        | Reactive Model          |
| Code Size       | Less                       | More                    |
| Learning Curve  | Easy                       | Moderate                |
| Suitable For    | Small Applications         | Enterprise Applications |
| Unit Testing    | Difficult                  | Easy                    |
| Dynamic Forms   | Limited                    | Excellent               |
| Performance     | Good                       | Better for large forms  |







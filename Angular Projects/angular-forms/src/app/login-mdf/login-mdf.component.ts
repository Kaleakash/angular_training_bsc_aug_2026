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
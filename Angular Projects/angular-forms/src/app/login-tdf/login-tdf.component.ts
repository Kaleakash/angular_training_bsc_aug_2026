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

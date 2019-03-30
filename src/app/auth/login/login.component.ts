import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as JWT from 'jwt-decode';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: any = {
    username : '',
    password: ''
  };
  error = '';
  loginForm: FormGroup;
  msg: string = null;
  class: string = null;

  constructor(private authentication: AuthenticationService, private router: Router) {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.authentication.login(this.login.username, this.login.password).subscribe( (data: any) => {
    

    if (this.login.username && this.login.password !== '') {
      const decoded = JWT(data['access_token']);
      
      localStorage.setItem('aud', decoded.aud);
      localStorage.setItem('exp', decoded.exp);
      localStorage.setItem('iss', decoded.iss);
      
      this.router.navigate(['/layouts/dashboard']);
    }

     
    }, error => {
      if (error.status === 400) {
        this.msg = 'Credenciales Inválidas';
        this.class = 'alert alert-danger';
      }
      console.log('Error');
  });

  }

}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ""
  password: string = ""
  reg_email: string = ""
  reg_password: string = ""

  message: string | null = null;
  reg_message: string | null = null;
  emailSent: string | null = null;
  passwordEmailSent: string | null = null;
  messageVisible: boolean = true;
  registerVisible: boolean = true;

  constructor(private userService : UserService, private router : Router) {}
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  reg_emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  ngOnInit() {
    var localStorage = window.localStorage;
  }

  postLogin(): void {

  }

  postRegister(): void {

  }

  postPassword(): void {
    
  }
 
}

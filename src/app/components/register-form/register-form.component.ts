import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidation } from '../../validations/password_validation';

import { User }    from '../../models/user';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})

export class RegisterFormComponent {

  form: FormGroup;
  
	constructor(
    private router: Router,
    fb: FormBuilder,
  ) {
    this.form = fb.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: PasswordValidation.MatchPassword
      }
    )
  }
	
  model = new User(1, 'Username', 'Password');
  submitted = false;
  onSubmit(model) { 
  	this.router.navigateByUrl('/dashboard')
  }
}
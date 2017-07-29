import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidation } from '../../validations/password_validation';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

	form: FormGroup;

  constructor(fb: FormBuilder)
	{
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
}
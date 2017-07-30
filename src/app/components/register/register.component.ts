import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidation } from '../../validations/password_validation';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

	form: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router
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

  onSubmit(): void {
    this.router.navigateByUrl('/dashboard');
  }
}

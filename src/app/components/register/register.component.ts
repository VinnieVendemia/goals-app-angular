import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

	form: FormGroup;

  constructor(fb: FormBuilder)
	  {
	    this.form = fb.group({
	    // define your control in you form
	      password: [''],
	      confirmPassword: ['']
	    })
	  }
}
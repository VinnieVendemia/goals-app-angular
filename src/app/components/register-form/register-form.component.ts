import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User }    from '../../models/user';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})

export class RegisterFormComponent {

	constructor(
    private router: Router
  ) {}
	
  model = new User(1, 'Username', 'Password');
  submitted = false;
  onSubmit(model) { 
  	console.log('Username: ' + model.username)
  	console.log('Pass: ' + model.password)
  	this.router.navigateByUrl('/dashboard')
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
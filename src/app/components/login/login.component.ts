import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User }    from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

	constructor(
    private router: Router
  ) {}

  model = new User(1, 'Username', 'Password');

	onSubmit(model) { 
  	console.log('Username: ' + model.username)
  	console.log('Pass: ' + model.password)
  	this.router.navigateByUrl('/dashboard')
  }
}
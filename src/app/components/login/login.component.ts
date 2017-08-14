import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User }    from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

	constructor(
    private router: Router
  ) {}

  model = new User(1, 'Username', 'Password');

	onSubmit(model) { 
  	this.router.navigateByUrl('/dashboard')
  }
}
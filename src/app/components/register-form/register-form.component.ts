import { Component } from '@angular/core';

import { User }    from '../../models/user';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  model = new User(1, 'Username', 'Password');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
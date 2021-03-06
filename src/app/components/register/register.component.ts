import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidation } from '../../validations/password_validation';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';


@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  constructor(
    private router: Router
  ) {}

  onSubmit(): void {
     this.router.navigateByUrl('/dashboard')
  }
}

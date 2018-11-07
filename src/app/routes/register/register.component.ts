import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShareService } from '../../services/share.service';
import { User } from '../../interface/User';

@Component({
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mockReg: ShareService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mockReg.userData
      .subscribe((result: User) => {
        if (result !== null) {
          this.router.navigate(['/']);
        }
      });

    this.registerForm = this.formBuilder
        .group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required]
        },
        {validator: this.checkPassword});
  }

  get f() { return this.registerForm.controls; }

  checkPassword(group: FormGroup): any {
    const password = group.controls.password.value;
    const confirmPassword = group.controls.confirmPassword.value;

    if (password === confirmPassword) {
      return null;
    }

    return {confirmed: true};
  }

  formSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.mockReg.registerUser(this.registerForm.value);
    this.router.navigate(['/']);
  }
}

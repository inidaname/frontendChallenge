import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    }, {validator: this.checkPassword});
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
}

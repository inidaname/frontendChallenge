import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/interface/User';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareService } from 'src/app/services/share.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Register Component', () => {
    expect(component).toBeTruthy();
  });

  it('should render form tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  }));


  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('Email field validity', () => {
    let errors = {};
    const email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue('test@example.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors: any = {};
    const password = component.registerForm.controls['password'];

    // Password field is required
    errors = password.errors || {};
    expect(errors.required).toBeTruthy();

    // Set password to something
    password.setValue('123456789');
    errors = password.errors || {};
    expect(errors.required).toBeFalsy();
  });

  it('should have password and confirmPassword equal value', () => {
    let errors: any = {};
    expect(component.registerForm.valid).toBeFalsy();
    const confirmPassword = component.registerForm.controls['confirmPassword'];
    const password = component.registerForm.controls['password'];

    // Password field is required
    errors = confirmPassword.errors || {};
    expect(errors.required).toBeTruthy();

    // Set password and confirm to something incorrect
    password.setValue('987654321');
    confirmPassword.setValue('123456789');

    expect(component.checkPassword(component.registerForm)).toBeTruthy();

    // Set password and confirm to something correct
    password.setValue('123456789');
    confirmPassword.setValue('123456789');

    expect(component.checkPassword(component.registerForm)).toBeNull();
  });

  it('submitting a form emits a user', inject([ShareService], (service: ShareService) => {
    expect(service).toBeTruthy();
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['email'].setValue('test@test.com');
    component.registerForm.controls['password'].setValue('123456789');
    component.registerForm.controls['confirmPassword'].setValue('123456789');
    expect(component.registerForm.valid).toBeTruthy();

    let user: User;
    // Subscribe to the Observable and store the user in a local variable.
    service.userData.subscribe(result => user = result);

    // Trigger the login function
    component.formSubmit();

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe('test@test.com');
  }));
});

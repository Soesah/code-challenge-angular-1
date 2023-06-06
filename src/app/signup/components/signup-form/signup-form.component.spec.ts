import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm } from './signup-form.component';
import { Warning } from '../../../common/components/warning/warning.component';
import { SignupService } from '../../services/signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

const signupMock = {
  sendSignup: jasmine.createSpy('submit', () => of('success')),
};

describe('SignupForm', () => {
  let component: SignupForm;
  let fixture: ComponentFixture<SignupForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, Warning],
      declarations: [SignupForm],
      providers: [{ provide: SignupService, useValue: signupMock }],
    });
    fixture = TestBed.createComponent(SignupForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('FedEx Signup');
  });

  it('should show the form field for firstName', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.field label')?.textContent).toContain(
      'Firstname'
    );
  });

  it('should show the warnings when the form is submitted', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector('button')?.click();

    fixture.detectChanges();
    expect(compiled.querySelectorAll('.field .warning')?.length).toEqual(4);
    expect(compiled.querySelector('button')?.disabled).toEqual(true);
  });

  it('should show disable the button and show instruction', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector('button')?.click();

    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Please fill out the form correctly'
    );
    expect(compiled.querySelector('button')?.disabled).toEqual(true);
  });

  it('should submit the form when valid', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      password: 'JDPassword',
      email: 'john@doe.com',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();

    expect(signupMock.sendSignup).toHaveBeenCalled();
  });

  it('should show required warning for firstname field', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: '',
      lastName: 'Doe',
      password: 'JDPassword',
      email: 'john@doe.com',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.warning')?.textContent).toContain(
      'Firstname is required'
    );
  });

  it('should show required warning for lastname field', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: 'John',
      lastName: '',
      password: 'JDPassword',
      email: 'john@doe.com',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.warning')?.textContent).toContain(
      'Lastname is required'
    );
  });

  it('should show required warning for password field', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      password: '',
      email: 'john@doe.com',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.warning')?.textContent).toContain(
      'Password is required'
    );
  });

  it('should show minLength warning for password field', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      password: 'aaAADD',
      email: 'john@doe.com',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.warning')?.textContent).toContain(
      'Password should be a minimum of eight characters'
    );
  });

  it('should show noNames warning for password field', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      password: 'JohnDpassword',
      email: 'john@doe.com',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.warning')?.textContent).toContain(
      'Password should not contain either firstname or lastname'
    );
  });

  it('should show required warning for email field', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      password: 'JDpassword',
      email: '',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.warning')?.textContent).toContain(
      'Email is required'
    );
  });

  it('should show valid email warning for email field', () => {
    const fixture = TestBed.createComponent(SignupForm);
    fixture.detectChanges();

    fixture.debugElement.componentInstance.signupForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      password: 'JDpassword',
      email: 'John',
    });

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.warning')?.textContent).toContain(
      'Please provide a valid email address.'
    );
  });
});

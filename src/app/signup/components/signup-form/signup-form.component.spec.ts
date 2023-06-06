import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm } from './signup-form.component';
import { Warning } from '../warning/warning.component';
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
      imports: [ReactiveFormsModule],
      declarations: [SignupForm, Warning],
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
});

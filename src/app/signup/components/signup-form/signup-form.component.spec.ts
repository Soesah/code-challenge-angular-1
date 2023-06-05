import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm } from './signup-form.component';
import { Warning } from '../warning/warning.component';
import { SignupService } from '../../services/signup.service';
import { ReactiveFormsModule } from '@angular/forms';

const signupMock = {
  sendSignup: jasmine.createSpy(),
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
});

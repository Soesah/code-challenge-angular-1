import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { SignupData } from '../../models/signup.model';
import { lowerAndUpper, noNames } from './validator.functions';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less'],
})
export class SignupForm {
  public signupForm: FormGroup;

  constructor(private signupService: SignupService) {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        lowerAndUpper,
        noNames,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit = () => {
    const signup: SignupData = {
      firstName: this.signupForm.controls['firstName'].value,
      lastName: this.signupForm.controls['lastName'].value,
      password: this.signupForm.controls['password'].value,
      email: this.signupForm.controls['email'].value,
    };
    this.signupService.sendSignup(signup);
  };
}

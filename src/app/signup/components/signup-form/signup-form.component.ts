import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { SignupData } from '../../models/signup.model';
import { lowerAndUpper, noNames, theOtherEmail } from './validator.functions';
import { Warning } from 'src/app/common/components/warning/warning.component';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less'],
})
export class SignupForm implements OnInit {
  public signupForm!: FormGroup;
  public showWarning: boolean = false;
  public showSuccess: boolean = false;

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        lowerAndUpper,
        noNames,
      ]),
      email: new FormControl('', [Validators.required, theOtherEmail]),
    });
  }

  public onSubmit = () => {
    if (!this.validate()) {
      return;
    }

    const signup: SignupData = {
      firstName: this.signupForm.controls['firstName'].value,
      lastName: this.signupForm.controls['lastName'].value,
      password: this.signupForm.controls['password'].value,
      email: this.signupForm.controls['email'].value,
    };
    this.signupService.sendSignup(signup).subscribe(() => {
      this.showSuccess = true;
    });
  };

  public validate(): boolean {
    this.showWarning = false;

    ['firstName', 'lastName', 'password', 'email'].map((key) =>
      this.validateControl(key)
    );

    this.showWarning = !this.signupForm.valid;
    return this.signupForm.valid;
  }

  private validateControl(key: string) {
    const control = this.signupForm.controls[key];

    // ensure validation shows
    control.updateValueAndValidity();
    control.markAsDirty();
    control.markAsTouched();
  }
}

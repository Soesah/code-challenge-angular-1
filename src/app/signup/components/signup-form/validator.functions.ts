import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export const lowerAndUpper = (
  control: AbstractControl
): ValidationErrors | null => {
  const upper = /[A-Z]/g.test(control.value);
  const lower = /[a-z]/g.test(control.value);
  return control.value && upper && lower
    ? null
    : !control.value
    ? null
    : { lowerAndUpper: { value: control.value } };
};

export const theOtherEmail = (
  control: AbstractControl
): ValidationErrors | null => {
  const validEmail = /^[^@]+@[^@]+\.[^@]+$/.test(control.value);
  return control.value && validEmail
    ? null
    : !control.value
    ? null
    : { theOtherEmail: { value: control.value } };
};

export const noNames = (control: AbstractControl) => {
  const form: FormGroup | null = control.parent as FormGroup;

  if (!form) {
    return null;
  }

  const firstName = form.controls['firstName'].value.toLowerCase();
  const lastName = form.controls['lastName'].value.toLowerCase();
  const password = form.controls['password'].value.toLowerCase();

  // reset
  form.controls['password'].setErrors(null);

  if (!firstName || !lastName) {
    return null;
  }

  const error =
    password &&
    firstName &&
    lastName &&
    (password.includes(firstName) || password.includes(lastName))
      ? { noNames: true }
      : null;

  form.controls['password'].setErrors(error);
  return error;
};

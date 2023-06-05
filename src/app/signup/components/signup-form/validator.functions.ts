import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const lowerAndUpper = (regExp: RegExp): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
};
export const noNames = (thing: any): ValidatorFn => {
  console.log(thing);
  return (control: AbstractControl): ValidationErrors | null => {
    // const forbidden = regExp.test(control.value);
    return null;
  };
};

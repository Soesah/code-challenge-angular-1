import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less'],
})
export class SignupForm {
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
}

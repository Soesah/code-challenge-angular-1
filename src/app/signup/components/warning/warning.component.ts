import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.less'],
})
export class Warning {
  @Input()
  public control!: AbstractControl<any, any>;
  @Input()
  public key!: string;
  @Input()
  public warning!: string;

  get isInvalid() {
    return (
      this.control.invalid &&
      this.control.errors?.[this.key] &&
      (this.control.dirty || this.control.touched)
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.less'],
  imports: [CommonModule],
})
export class Warning {
  @Input({ required: true })
  public control!: AbstractControl<any, any>;
  @Input({ required: true })
  public key!: string;
  @Input({ required: true })
  public warning!: string;

  get isInvalid() {
    return (
      this.control.invalid &&
      this.control.errors?.[this.key] &&
      (this.control.dirty || this.control.touched)
    );
  }
}

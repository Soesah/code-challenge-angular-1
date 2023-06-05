import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupForm } from './components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Warning } from './components/warning/warning.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SignupForm, Warning],
  providers: [],
  exports: [SignupForm],
})
export class SignupModule {}

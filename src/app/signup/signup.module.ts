import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupForm } from './components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SignupForm],
  providers: [SignupForm],
  exports: [SignupForm],
})
export class SignupModule {}

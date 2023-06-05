import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupForm } from './components/signup-form/signup-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SignupForm],
  providers: [SignupForm],
  exports: [SignupForm],
})
export class SignupModule {}

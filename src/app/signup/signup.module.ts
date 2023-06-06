import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupForm } from './components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './services/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { Warning } from '../common/components/warning/warning.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, Warning],
  declarations: [SignupForm],
  providers: [SignupService],
  exports: [SignupForm],
})
export class SignupModule {}

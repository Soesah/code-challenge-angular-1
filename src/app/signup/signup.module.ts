import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupForm } from './components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Warning } from './components/warning/warning.component';
import { SignupService } from './services/signup.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  declarations: [SignupForm, Warning],
  providers: [SignupService],
  exports: [SignupForm],
})
export class SignupModule {}

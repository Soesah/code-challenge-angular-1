import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupForm } from './signup/components/signup-form/signup-form.component';

const routes: Routes = [
  {
    title: 'Signup',
    path: '/signup',
    component: SignupForm,
  },
  {
    path: '/',
    redirectTo: '/signup',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

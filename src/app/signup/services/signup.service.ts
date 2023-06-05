import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupData } from '../models/signup.model';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private api: string = 'https://demo-api.now.sh/users';

  constructor(private httpClient: HttpClient) {}

  sendSignup(signup: SignupData) {
    console.log(signup);

    // this.httpClient.post(this.api, signup);
  }
}

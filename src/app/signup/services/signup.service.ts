import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupData } from '../models/signup.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private api: string = 'https://demo-api.now.sh/users';

  constructor(private httpClient: HttpClient) {}

  sendSignup(signup: SignupData): Observable<any> {
    return this.httpClient.post(this.api, signup);
  }
}

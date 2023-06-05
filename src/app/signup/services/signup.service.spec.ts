import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const httpMock = {
  post: () => of('posted'),
};

describe('SignupService', () => {
  let service: SignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpMock }],
    });
    service = TestBed.inject(SignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide sendSignup', () => {
    expect(service.sendSignup).toBeTruthy();
  });

  it('should return an observable', (done) => {
    service
      .sendSignup({
        firstName: 'John',
        lastName: 'Smith',
        password: 'test',
        email: 'test@example.com',
      })
      .subscribe((result) => {
        expect(result).toEqual('posted');
        done();
      });
  });
});

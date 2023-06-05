import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForm } from './signup-form.component';

describe('SignupForm', () => {
  let component: SignupForm;
  let fixture: ComponentFixture<SignupForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupForm],
    });
    fixture = TestBed.createComponent(SignupForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

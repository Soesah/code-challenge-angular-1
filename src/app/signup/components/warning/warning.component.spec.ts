import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warning } from './warning.component';
import { FormControl, Validators } from '@angular/forms';

describe('Warning', () => {
  let component: Warning;
  let fixture: ComponentFixture<Warning>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Warning],
    });
    fixture = TestBed.createComponent(Warning);
    component = fixture.componentInstance;
    component.control = new FormControl('', [Validators.required]);
    component.key = 'required';
    component.warning = 'the test warning';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});

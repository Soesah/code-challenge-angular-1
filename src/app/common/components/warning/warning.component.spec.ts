import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warning } from './warning.component';
import { FormControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Warning', () => {
  let component: Warning;
  let fixture: ComponentFixture<Warning>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Warning],
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

  it('should show nothing when valid', () => {
    const warning = fixture.debugElement.query(By.css('.warning'));
    expect(warning).toBeFalsy();
  });

  it('should show the warning when invalid', () => {
    component.control.markAsTouched();
    component.control.markAsDirty();
    component.control.setErrors({ required: true });
    fixture.detectChanges();
    const warning = fixture.debugElement.query(By.css('.warning'));
    expect(warning.nativeElement.textContent).toContain(component.warning);
  });

  describe('isInvalid', () => {
    it('should provide false when valid', () => {
      expect(component.isInvalid).toEqual(false);
    });
    it('should provide true when invalid', () => {
      component.control.markAsTouched();
      component.control.markAsDirty();
      component.control.setErrors({ required: true });
      expect(component.isInvalid).toEqual(true);
    });
  });
});

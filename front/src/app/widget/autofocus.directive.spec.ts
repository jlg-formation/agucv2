import { AutofocusDirective } from './autofocus.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<input type="text" ><input type="password" appAutofocus>',
})
export class TestComponent {}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should focus on the element where appAutofocus is applied', () => {
    const actualAutofocus = document.activeElement;
    const compiled: HTMLElement = fixture.nativeElement;
    const expectedAutofocus = compiled.querySelector('input[type="password"]');
    expect(actualAutofocus).toBe(expectedAutofocus);
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ANalyticalComponent } from './ANalytical.component';

describe('ANalyticalComponent', () => {
  let component: ANalyticalComponent;
  let fixture: ComponentFixture<ANalyticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ANalyticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ANalyticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

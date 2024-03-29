/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyStoreComponent } from './my-store.component';

describe('MyStoreComponent', () => {
  let component: MyStoreComponent;
  let fixture: ComponentFixture<MyStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

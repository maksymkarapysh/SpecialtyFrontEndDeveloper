import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List1Component } from './list1.component';

describe('List1Component', () => {
  let component: List1Component;
  let fixture: ComponentFixture<List1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

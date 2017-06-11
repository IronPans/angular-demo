import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouter2Component } from './demo-router2.component';

describe('DemoRouter2Component', () => {
  let component: DemoRouter2Component;
  let fixture: ComponentFixture<DemoRouter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

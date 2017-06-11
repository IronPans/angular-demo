import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChildRouter2Component } from './demo-child-router2.component';

describe('DemoChildRouter2Component', () => {
  let component: DemoChildRouter2Component;
  let fixture: ComponentFixture<DemoChildRouter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChildRouter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChildRouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

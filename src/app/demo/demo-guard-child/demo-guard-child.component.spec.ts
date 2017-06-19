import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGuardChildComponent } from './demo-guard-child.component';

describe('DemoGuardChildComponent', () => {
  let component: DemoGuardChildComponent;
  let fixture: ComponentFixture<DemoGuardChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoGuardChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGuardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

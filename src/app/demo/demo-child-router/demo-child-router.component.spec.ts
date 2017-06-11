import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChildRouterComponent } from './demo-child-router.component';

describe('DemoChildRouterComponent', () => {
  let component: DemoChildRouterComponent;
  let fixture: ComponentFixture<DemoChildRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChildRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChildRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

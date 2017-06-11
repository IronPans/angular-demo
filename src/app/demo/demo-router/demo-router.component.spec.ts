import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouterComponent } from './demo-router.component';

describe('DemoRouterComponent', () => {
  let component: DemoRouterComponent;
  let fixture: ComponentFixture<DemoRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

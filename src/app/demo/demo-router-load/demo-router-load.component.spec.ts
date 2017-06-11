import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouterLoadComponent } from './demo-router-load.component';

describe('DemoRouterLoadComponent', () => {
  let component: DemoRouterLoadComponent;
  let fixture: ComponentFixture<DemoRouterLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouterLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouterLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

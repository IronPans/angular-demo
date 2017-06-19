import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGuardComponent } from './demo-guard.component';

describe('DemoGuardComponent', () => {
  let component: DemoGuardComponent;
  let fixture: ComponentFixture<DemoGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

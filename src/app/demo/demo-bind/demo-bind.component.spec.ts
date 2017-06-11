import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBindComponent } from './demo-bind.component';

describe('DemoBindComponent', () => {
  let component: DemoBindComponent;
  let fixture: ComponentFixture<DemoBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

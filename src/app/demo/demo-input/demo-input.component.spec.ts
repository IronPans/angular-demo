import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputComponent } from './demo-input.component';

describe('DemoInputComponent', () => {
  let component: DemoInputComponent;
  let fixture: ComponentFixture<DemoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

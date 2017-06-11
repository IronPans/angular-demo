import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServiceComponent } from './demo-service.component';

describe('DemoServiceComponent', () => {
  let component: DemoServiceComponent;
  let fixture: ComponentFixture<DemoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStyleComponent } from './demo-style.component';

describe('DemoStyleComponent', () => {
  let component: DemoStyleComponent;
  let fixture: ComponentFixture<DemoStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

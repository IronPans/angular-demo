import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTrendComponent } from './demo-trend.component';

describe('DemoTrendComponent', () => {
  let component: DemoTrendComponent;
  let fixture: ComponentFixture<DemoTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

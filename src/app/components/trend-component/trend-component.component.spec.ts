import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendComponentComponent } from './trend-component.component';

describe('TrendComponentComponent', () => {
  let component: TrendComponentComponent;
  let fixture: ComponentFixture<TrendComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

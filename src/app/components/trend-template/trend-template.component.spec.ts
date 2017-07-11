import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendTemplateComponent } from './trend-template.component';

describe('TrendTemplateComponent', () => {
  let component: TrendTemplateComponent;
  let fixture: ComponentFixture<TrendTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

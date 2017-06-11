import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipComponent } from './demo-pipe.component';

describe('DemoPipComponent', () => {
  let component: DemoPipComponent;
  let fixture: ComponentFixture<DemoPipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSurveysComponent } from './parking-surveys.component';

describe('ParkingSurveysComponent', () => {
  let component: ParkingSurveysComponent;
  let fixture: ComponentFixture<ParkingSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

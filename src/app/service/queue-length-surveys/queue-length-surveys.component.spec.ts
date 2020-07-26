import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueLengthSurveysComponent } from './queue-length-surveys.component';

describe('QueueLengthSurveysComponent', () => {
  let component: QueueLengthSurveysComponent;
  let fixture: ComponentFixture<QueueLengthSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueLengthSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueLengthSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

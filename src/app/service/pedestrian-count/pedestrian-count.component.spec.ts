import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedestrianCountComponent } from './pedestrian-count.component';

describe('PedestrianCountComponent', () => {
  let component: PedestrianCountComponent;
  let fixture: ComponentFixture<PedestrianCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedestrianCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedestrianCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

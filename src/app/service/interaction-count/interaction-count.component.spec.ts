import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionCountComponent } from './interaction-count.component';

describe('InteractionCountComponent', () => {
  let component: InteractionCountComponent;
  let fixture: ComponentFixture<InteractionCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllegalmovementComponent } from './customized-counts.component';

describe('IllegalmovementComponent', () => {
  let component: IllegalmovementComponent;
  let fixture: ComponentFixture<IllegalmovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllegalmovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllegalmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

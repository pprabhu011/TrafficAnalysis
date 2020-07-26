import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCountsComponent } from './customized-counts.component';

describe('CustomizedCountsComponent', () => {
  let component: CustomizedCountsComponent;
  let fixture: ComponentFixture<CustomizedCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTerminalComponent } from './bus-terminal.component';

describe('BusTerminalComponent', () => {
  let component: BusTerminalComponent;
  let fixture: ComponentFixture<BusTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-count',
  template: `
  <div> Interaction counts </div>`,
  styleUrls: ['./interaction-count.component.css']
})
export class InteractionCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  dropDownMenuClicked: boolean;
   traffic: HTMLCollection = document.getElementsByClassName('p-traffic');
  @ViewChild('dropdown') dropDown;
  constructor() { 
    document.addEventListener('click',this.close.bind(event));
  }

  ngOnInit(): void {
  }

  dropDownClick(): void{
    if(this.traffic[0].getElementsByClassName('dropdown-toggle')[0].getAttribute('aria-expanded') === 'true') {
      this.traffic[0].getElementsByClassName('dropdown-toggle')[0].setAttribute('aria-expanded','false');
    this.traffic[0].getElementsByClassName('dropdown-menu')[0].classList.remove('show'); }
    else{
      this.traffic[0].getElementsByClassName('dropdown-toggle')[0].setAttribute('aria-expanded','true');
      this.traffic[0].getElementsByClassName('dropdown-menu')[0].classList.add('show');
    }
  }
  close(e): void{
    if(e.target.id !=='navbarDropdown' ) {
      let traffic: HTMLCollection = document.getElementsByClassName('p-traffic');
      if(traffic[0].getElementsByClassName('dropdown-toggle')[0].getAttribute('aria-expanded') === 'true'){
      traffic[0].getElementsByClassName('dropdown-toggle')[0].setAttribute('aria-expanded','false');
      traffic[0].getElementsByClassName('dropdown-menu')[0].classList.remove('show');
      }
    }
  }
  mobileNavOpen(){
    // need to handle for mobile clicking in nav 
    debugger;
  }

}

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
  @ViewChild('nav') nav;
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
    let traffic: HTMLCollection = document.getElementsByClassName('p-traffic');
    if(e.target.id !=='navbarDropdown' ) {
      if(traffic[0].getElementsByClassName('dropdown-toggle')[0].getAttribute('aria-expanded') === 'true'){
      traffic[0].getElementsByClassName('dropdown-toggle')[0].setAttribute('aria-expanded','false');
      traffic[0].getElementsByClassName('dropdown-menu')[0].classList.remove('show');
      }
    }
    debugger;
    if(e.target.id !=='nav-mobile-button'){
      if(traffic[0].getElementsByClassName('navbar-toggler')[0].getAttribute('aria-expanded') === 'true'){
        traffic[0].getElementsByClassName('navbar-toggler')[0].setAttribute('aria-expanded','false');
        traffic[0].getElementsByClassName('navbar-collapse')[0].classList.remove('show');
    }
    }
  }
  mobileNavOpen(){
    if(this.nav.nativeElement.getElementsByClassName('navbar-toggler')[0].getAttribute('aria-expanded') === 'false' ) {
    this.nav.nativeElement.getElementsByClassName('navbar-toggler')[0].setAttribute('aria-expanded','true');
    this.nav.nativeElement.getElementsByClassName('navbar-collapse')[0].classList.add('show'); }
    else{
      this.nav.nativeElement.getElementsByClassName('navbar-toggler')[0].setAttribute('aria-expanded','false');
      this.nav.nativeElement.getElementsByClassName('navbar-collapse')[0].classList.remove('show');

    }
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn:boolean=false;
  logInUser(isLogged : boolean){
    this.isLoggedIn = isLogged;
  }
  showHiddenDrop: boolean = false;
  showTheDrop(showDropdown:boolean){
    this.showHiddenDrop = showDropdown;
  }
}

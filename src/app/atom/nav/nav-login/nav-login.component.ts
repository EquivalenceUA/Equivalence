import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.scss']
})
export class NavLoginComponent {

  @Output() logInEvent = new EventEmitter<boolean>();
  
  
  logInPerson(){
    const isLogged: boolean = true;
    this.logInEvent.emit(isLogged);
  }
}

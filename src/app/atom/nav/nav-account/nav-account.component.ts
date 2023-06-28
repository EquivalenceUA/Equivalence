import { Component, EventEmitter, Output } from '@angular/core';
import { user } from 'src/app/supplying-stuff/navbar';


@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html',
  styleUrls: ['./nav-account.component.scss']
})
export class NavAccountComponent {
  @Output() showComponentEvent = new EventEmitter<boolean>();
  showComponent: boolean = false;

  user: user = {
    accountImage: '../../../assets/accountImage.png',
    firstName: 'Annie',
    lastName: 'Helyk',
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    userEmail: 'example@gmail.com'  
  }

  showDropdownComponent(){
    this.showComponent = !this.showComponent
    this.showComponentEvent.emit(this.showComponent);
  }
}

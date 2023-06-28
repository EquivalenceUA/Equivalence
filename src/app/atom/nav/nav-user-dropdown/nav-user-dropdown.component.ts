import { Component } from '@angular/core';
import { user } from 'src/app/supplying-stuff/navbar';

@Component({
  selector: 'app-nav-user-dropdown',
  templateUrl: './nav-user-dropdown.component.html',
  styleUrls: ['./nav-user-dropdown.component.scss']
})
export class NavUserDropdownComponent {
  user: user = {
    accountImage: '../../../assets/accountImage.png',
    firstName: 'Annie',
    lastName: 'Helyk',
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    userEmail: 'example@gmail.com'  
  }
}

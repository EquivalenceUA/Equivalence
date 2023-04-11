import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-dark-mode',
  templateUrl: './nav-dark-mode.component.html',
  styleUrls: ['./nav-dark-mode.component.scss']
})
export class NavDarkModeComponent {
  dakMode: boolean = false;
  toggleDarkMode(){
    this.dakMode = !this.dakMode;
  }

}

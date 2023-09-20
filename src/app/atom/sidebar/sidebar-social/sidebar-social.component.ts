import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-social',
  templateUrl: './sidebar-social.component.html',
  styleUrls: ['./sidebar-social.component.scss']
})
export class SidebarSocialComponent {

  
  insta="../../../../assets/sidebar/instagram/instagram"
  youtube="../../../../assets/sidebar/Youtube/youtube"
  email="../../../../assets/sidebar/email/email"
  instah : boolean = false;
  youtubeh : boolean = false;
  emailh : boolean = false;

  default = "_default.svg"
  hover = "_hover.svg"



}

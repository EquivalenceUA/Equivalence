import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent {
  @Input() title : string ='';
  @Input() imageLink: string ='';
}

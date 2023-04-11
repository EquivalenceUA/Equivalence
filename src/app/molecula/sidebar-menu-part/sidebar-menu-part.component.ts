import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/supplying-stuff/menu';


@Component({
  selector: 'app-sidebar-menu-part',
  templateUrl: './sidebar-menu-part.component.html',
  styleUrls: ['./sidebar-menu-part.component.scss']
})
export class SidebarMenuPartComponent {

  @Input() menu : Menu = {name: '', buttons:[]};
}

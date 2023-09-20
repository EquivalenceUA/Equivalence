import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/supplying-stuff/menu';


@Component({
  selector: 'app-sidebar-menu-part',
  templateUrl: './sidebar-menu-part.component.html',
  styleUrls: ['./sidebar-menu-part.component.scss']
})
export class SidebarMenuPartComponent {

homeh:boolean=false;
cateh:boolean=false;
donah:boolean=false;
rulesh:boolean=false;
exercih:boolean=false;
abouth:boolean=false;

home = "../../../assets/sidebar/home/home";
categories = "../../../assets/sidebar/categories/categories";
donate = "../../../assets/sidebar/Donate_term/donate_term";
rules = "../../../assets/sidebar/rules/rules";
exercises = "../../../assets/sidebar/exercises/exercises";
about = "../../../assets/sidebar/about_us/about_us";

default = "_default.svg";
hover = "_hover.svg"
}

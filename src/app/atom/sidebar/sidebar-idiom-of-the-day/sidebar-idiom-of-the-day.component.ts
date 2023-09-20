import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-idiom-of-the-day',
  templateUrl: './sidebar-idiom-of-the-day.component.html',
  styleUrls: ['./sidebar-idiom-of-the-day.component.scss']
})
export class SidebarIdiomOfTheDayComponent {
  @Input() idiom: string = ''

  idiomh:boolean=false;

  idiom_image = "../../../../assets/sidebar/term_of/term_of"
  default = "_default.svg"
  hover = "_hover.svg"
}

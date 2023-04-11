import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-idiom-of-the-day',
  templateUrl: './sidebar-idiom-of-the-day.component.html',
  styleUrls: ['./sidebar-idiom-of-the-day.component.scss']
})
export class SidebarIdiomOfTheDayComponent {
  @Input() idiom: string = ''
}

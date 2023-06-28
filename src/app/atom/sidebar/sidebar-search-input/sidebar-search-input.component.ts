import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-search-input',
  templateUrl: './sidebar-search-input.component.html',
  styleUrls: ['./sidebar-search-input.component.scss']
})
export class SidebarSearchInputComponent {
  @Input() placeholderText: string = 'Category, Exercise...'
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-language',
  templateUrl: './nav-language.component.html',
  styleUrls: ['./nav-language.component.scss']
})
export class NavLanguageComponent {
  languages : String[] = ['En', 'Укр']
  selectedLanguage: string = 'En';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-def-main',
  templateUrl: './word-def-main.component.html',
  styleUrls: ['./word-def-main.component.scss']
})
export class WordDefMainComponent {

  @Input() word: any;


}

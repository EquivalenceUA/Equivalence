import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-def-head',
  templateUrl: './word-def-head.component.html',
  styleUrls: ['./word-def-head.component.scss']
})
export class WordDefHeadComponent {
 
  @Input() word: any;


}

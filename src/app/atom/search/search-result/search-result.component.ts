import { Component, Input } from '@angular/core';
import { WordService } from 'src/app/services/word.service';




@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() results: any;
  @Input() searchLang:string = '';

  constructor(private word: WordService){}

  saveTheWord(word: any){
    this.word.setTheWord(word);
  }


}

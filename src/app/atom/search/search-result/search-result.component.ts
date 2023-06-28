import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from 'db/word-interface';
import { setWord } from 'src/app/supplying-stuff/app.actions';
import { AppState } from 'src/app/supplying-stuff/app.state';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() results: any;

  constructor(private store: Store<{app: AppState}>){}

  passWordToWordComp(word: Word){
    this.store.dispatch(setWord({value: word}))
  }


}

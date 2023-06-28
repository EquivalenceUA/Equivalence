import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { WORDS } from 'db/first-db';
import { Word } from 'db/word-interface';
import { Observable } from 'rxjs';
import { selectWord } from 'src/app/supplying-stuff/app.reducers';
import { AppState } from 'src/app/supplying-stuff/app.state';


@Component({
  selector: 'app-word-def',
  templateUrl: './word-def.component.html',
  styleUrls: ['./word-def.component.scss']
})
export class WordDefComponent {

  word: Word = WORDS[2];
  getWord$: Observable<Word>;

  constructor(private store: Store<{ app: AppState }>){
    this.getWord$ = store.pipe(select(selectWord));
  }
}

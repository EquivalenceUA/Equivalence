import { Injectable } from '@angular/core';
import Word from '../services/word.interface'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private word = new BehaviorSubject<any>(null);
  word$ = this.word.asObservable();

  constructor() { }

  setTheWord(newWord:Word){
    this.word.next(newWord);
  }
}

import { Component } from '@angular/core';
import { Word } from 'db/word-interface';
import { WordService } from 'src/app/services/word.service';



@Component({
  selector: 'app-word-def',
  templateUrl: './word-def.component.html',
  styleUrls: ['./word-def.component.scss']
})
export class WordDefComponent {

  word!: Word;
  
  constructor(private wordS:WordService){
    
  }

  ngOnInit(){
    this.wordS.word$.subscribe((newValue)=>{
      this.word = newValue;
    })
  }
}

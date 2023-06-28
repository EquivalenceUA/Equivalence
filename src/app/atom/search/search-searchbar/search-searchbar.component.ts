import { Component } from '@angular/core';
import { WORDS } from 'db/first-db';

@Component({
  selector: 'app-search-searchbar',
  templateUrl: './search-searchbar.component.html',
  styleUrls: ['./search-searchbar.component.scss']
})
export class SearchSearchbarComponent {

  searchTerm: string = '';
  words = WORDS;
  searchResults: any;
  constructor(){
    
  }
  
  search(term: string){
    return new Promise((res, rej)=>{
      if(term.length < 1){
        rej(this.searchResults = [] && console.error('No letters in search'))
      }else{        
        let results = [];
        for (let word of this.words) {
          // TODO Need to change this part for the future to search better
          if (word.engWord.match(new RegExp('^' + term, 'i'))) {
            results.push(word);
          }
          if(results.length>= 10){
            res(this.searchResults = results);
          }
        }
        res(this.searchResults = results);
      }
    })
  }

}

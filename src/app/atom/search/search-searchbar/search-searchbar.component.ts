import { Component } from '@angular/core';
import { WORDS } from 'db/first-db';
import { WordGetterService } from 'src/app/supplying-stuff/services/word-getter.service';

@Component({
  selector: 'app-search-searchbar',
  templateUrl: './search-searchbar.component.html',
  styleUrls: ['./search-searchbar.component.scss']
})
export class SearchSearchbarComponent {

  searchTerm: string = '';
  words = WORDS;
  searchResults: any;
  constructor( private wordGetter:WordGetterService){
    
  }
  
  //TODO: For Demonstration purpose only!

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

    // For backend purpose
  // search(term: string){
  //   console.log("search is going on! in search component")
  //   return new Promise((res, rej)=>{
  //     if(term.length < 1){
  //       rej(this.searchResults = [] && console.error('No letters in search'))
  //     }else{        
  //       this.wordGetter.getWordsBySearchTerm(term)
  //       .subscribe({
  //         next: (response: any) => {
  //           this.searchResults = response;
  //         },
  //         error: (error:any) =>{
  //           console.error(error);
  //         },
  //         complete: ()=>{
  //           console.log('response completed');
  //         }
  //       })
  //       res(this.searchResults);
  //     }
  //   })
  // }

}

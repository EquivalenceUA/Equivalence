import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-searchbar',
  templateUrl: './search-searchbar.component.html',
  styleUrls: ['./search-searchbar.component.scss']
})
export class SearchSearchbarComponent {
  @Input() searchLang:string = '';
  @ViewChild('searchInput')
  searchInput!: ElementRef;
  @ViewChild('results')
  results!: ElementRef;
  onWordRoute: boolean = false;
  searchTerm: string = '';
  searchResults: any = {};
  isVisible = false;
  constructor( private http: HttpClient,){
  }

  clearInput(){
    this.searchInput.nativeElement.value = "";
    this.results.nativeElement.style.display = "none"
    this.isVisible = false
  }


  
  searchWord(searchWord: string){
    if(this.results.nativeElement.style.display == "none"){
      this.results.nativeElement.style.display = "flex"
    }
    if(searchWord.length<1){
      this.isVisible = false
      return
    }
    this.isVisible = true;
    let searchWordEng = {word: searchWord, lang: this.searchLang}
    this.http.post('http://localhost:3000/api/users/word', searchWordEng)
    .subscribe({
      next: response=> {
        console.log('Words have been found: ', response);
        this.searchResults = response;
      },
      error: error => {
        console.error('Error searching for word:', error);
      },
      complete: () => {
        console.log('Word found successfully.');
      }
    })
  }

}

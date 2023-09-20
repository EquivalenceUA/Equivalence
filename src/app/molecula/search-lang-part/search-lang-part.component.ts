import { Component } from '@angular/core';

@Component({
  selector: 'app-search-lang-part',
  templateUrl: './search-lang-part.component.html',
  styleUrls: ['./search-lang-part.component.scss']
})
export class SearchLangPartComponent {
  left = 'eng';
  right = 'ua';

  reverseLanguage(){
    if(this.left == 'eng'){
      this.left = 'ua';
      this.right = 'eng'; 
    }else{
      this.left = 'eng';
      this.right = 'ua';
    }
  }


}

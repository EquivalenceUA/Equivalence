import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-language',
  templateUrl: './search-language.component.html',
  styleUrls: ['./search-language.component.scss']
})
export class SearchLanguageComponent {
  @Input() selectedLanguage!: string;

  language: string = '';
  flag : string = '';

  constructor(){}

  ngOnChanges(changes: SimpleChanges){
    if(changes['selectedLanguage'].currentValue == 'eng'){
      this.language = "English";
      this.flag = "../../../assets/main-lang/Eng-flag.svg"
    }else{
      this.language = "Ukrainian";
      this.flag = "../../../assets/main-lang/Ukr-flag.svg"
    }
  }
}

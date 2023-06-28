import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-language',
  templateUrl: './search-language.component.html',
  styleUrls: ['./search-language.component.scss']
})
export class SearchLanguageComponent {
  @Input() selectedLanguage!: string;

  src :string = '';


  constructor(){}

  @ViewChild('option1') option1!: ElementRef;
  @ViewChild('option2') option2!: ElementRef;
  @ViewChild('controlledSelect') controlledSelect!: ElementRef<HTMLSelectElement>;


  initialCheckForSelectedElement(){
    if(this.option1.nativeElement.value === this.selectedLanguage){
      this.option1.nativeElement.selected = true;
      this.option2.nativeElement.selected = false;
      this.src = '../../../assets/main-lang/Eng-flag.svg'
    }else{
      this.option2.nativeElement.selected = true;
      this.option1.nativeElement.selected = false;
      this.src = '../../../assets/main-lang/Ukr-flag.svg'
    }
  }

  checkForFlag(){
    if(this.option1.nativeElement.hasAttribute('selected')){
      this.src = '../../../assets/main-lang/Eng-flag.svg';
    }else if(this.option2.nativeElement.hasAttribute('selected')){
      this.src = '../../../assets/main-lang/Ukr-flag.svg';
    }
  }

  checkForSelectedElement(){
    if(this.option1.nativeElement.hasAttribute('selected')){
      this.option1.nativeElement.removeAttribute('selected');
      this.option2.nativeElement.setAttribute('selected', 'selected');
    }else if(!this.option1.nativeElement.hasAttribute('selected')){
      this.option2.nativeElement.removeAttribute('selected');
      this.option1.nativeElement.setAttribute('selected', 'selected');
    }
    this.checkForFlag();
  }

  
  ngAfterViewInit(){
    this.initialCheckForSelectedElement();
    this.controlledSelect.nativeElement.addEventListener('change', ()=>{
      this.checkForSelectedElement();
    })
  }
}

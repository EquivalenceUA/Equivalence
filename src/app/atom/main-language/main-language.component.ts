import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-language',
  templateUrl: './main-language.component.html',
  styleUrls: ['./main-language.component.scss']
})
export class MainLanguageComponent {
  @Input() selectedLanguage!: string;



  constructor(){}

  @ViewChild('option1') option1!: ElementRef;
  @ViewChild('option2') option2!: ElementRef;
  @ViewChild('controlledSelect') controlledSelect!: ElementRef<HTMLSelectElement>;


  initialCheckForSelectedElement(){
    if(this.option1.nativeElement.value === this.selectedLanguage){
      this.option1.nativeElement.selected = true;
      this.option2.nativeElement.selected = false;
      this.option1.nativeElement.classList.add('hidden');
      this.option2.nativeElement.classList.remove('hidden');
    }else{
      this.option2.nativeElement.selected = true;
      this.option1.nativeElement.selected = false;
      this.option2.nativeElement.classList.add('hidden');
      this.option1.nativeElement.classList.remove('hidden');
    }
  }

  checkForSelectedElement(){
    if(this.option1.nativeElement.hasAttribute('selected')){
      this.option1.nativeElement.removeAttribute('selected');
      this.option2.nativeElement.setAttribute('selected', 'selected')
      this.option1.nativeElement.classList.remove('hidden');
      this.option2.nativeElement.classList.add('hidden');
    }else if(!this.option1.nativeElement.hasAttribute('selected')){
      this.option2.nativeElement.removeAttribute('selected');
      this.option1.nativeElement.setAttribute('selected', 'selected')
      this.option1.nativeElement.classList.add('hidden');
      this.option2.nativeElement.classList.remove('hidden');
    }
  }

  
  ngAfterViewInit(){
    this.initialCheckForSelectedElement();
    this.controlledSelect.nativeElement.addEventListener('change', ()=>{
      this.checkForSelectedElement();
    })
  }

}

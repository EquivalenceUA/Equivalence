import { Component, OnInit } from '@angular/core';
import { SubcategoryWordListService } from 'src/app/services/subcategory-word-list.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-scwlist',
  templateUrl: './scwlist.component.html',
  styleUrls: ['./scwlist.component.scss']
})
export class ScwlistComponent implements OnInit{
  listOfWords:any = [];
  nameOfSub:any;
  totalColumns:any = [];
  currentPage: number=1;
  totalPages:number=0;
  temsOnThePage: number = 0;
  pagesArray:string[]=[];
  

  constructor( private _subser:SubcategoryWordListService,
    private _wser:WordService){
  }


  ngOnInit(){
    this.nameOfSub = this._subser.subcateg;
    this.chooseSubCat();
    
  }

  goToWord(word:any){
    this._wser.setTheWord(word);
  }

  chooseSubCat(){
    this._subser.getSubcategoryWordList(this.nameOfSub)
    .subscribe({
      next: response=> {
        console.log('Subcategory words found: ', response);
        this.listOfWords = response;
      },
      error: error => {
        console.error('Error searching for word:', error);
      },
      complete: () => {
        console.log('Word found successfully.');
        this.getColumnWords(this.listOfWords.words); 
        this.getNumberOfPages(this.listOfWords.words);
      }
    })
  }


  getColumnWords(arrayOfWords:any){
    this.totalColumns = [];
    let startWordsCount = (this.currentPage -1)*36;
    let endWordsCount = this.currentPage*36;
    let neededWordsForPage = arrayOfWords.slice(startWordsCount, endWordsCount);
    this.temsOnThePage = neededWordsForPage.length;
    for(let i=0; i<3; i++){
      let column = neededWordsForPage.slice(i*11, (i+1)*11);
      this.totalColumns.push(column)
    }
  }

  getNumberOfPages(wordsList:any){
    this.totalPages = Math.ceil(wordsList.length/36);
    for(let i = 1; i<=this.totalPages; i++){
      this.pagesArray.push(i.toString());
    }
  }
  nextPage(){
    this.currentPage +=1;
    this.getColumnWords(this.listOfWords.words);
  }

  previousPage(){
    this.currentPage -=1;
    this.getColumnWords(this.listOfWords.words);
  }
  specificPage(page:number){
    this.currentPage = page;
    this.getColumnWords(this.listOfWords.words);
  }

}

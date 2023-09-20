import { Component, Input } from '@angular/core';
import { SubcategoryWordListService } from 'src/app/services/subcategory-word-list.service';
import { Subcategory } from 'src/app/supplying-stuff/categories';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent {
  
  @Input()
  subcategory!: Subcategory;
  
  constructor(private _subcategoryWordList:SubcategoryWordListService){}

  searchForSubcategoryWordsList(subcategoryName:string){
    this._subcategoryWordList.setSubcateg(subcategoryName);
  }
}

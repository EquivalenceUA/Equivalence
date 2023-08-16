import { Component } from '@angular/core';
import { Subcategory, categories } from 'src/app/supplying-stuff/categories';

@Component({
  selector: 'app-subcategories-grid',
  templateUrl: './subcategories-grid.component.html',
  styleUrls: ['./subcategories-grid.component.scss']
})
export class SubcategoriesGridComponent {
  subcategories: Subcategory[] = [];


  ngOnInit(){
    this.subcategories = categories[1].subcategories;
  }
}

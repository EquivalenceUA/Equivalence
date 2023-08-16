import { Component } from '@angular/core';
import { Category, categories } from 'src/app/supplying-stuff/categories';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.scss']
})
export class MainCategoriesComponent {

  categories: Category[] = [];
constructor(){

}

ngOnInit(){
  this.categories = categories;
}



}

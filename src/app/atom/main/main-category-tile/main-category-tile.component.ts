import { Component, Input } from '@angular/core';
import { Category } from 'src/app/supplying-stuff/categories';

@Component({
  selector: 'app-main-category-tile',
  templateUrl: './main-category-tile.component.html',
  styleUrls: ['./main-category-tile.component.scss']
})
export class MainCategoryTileComponent {

  @Input()
  category!: Category;

  imageSourse = '';

  ngOnInit(){
    this.imageSourse = 'assets/category-tile/'+ this.category.category + '.svg'
  }
  

}

import { Component, Input } from '@angular/core';
import { Category } from 'src/app/supplying-stuff/categories';

@Component({
  selector: 'app-main-category-tile',
  templateUrl: './main-category-tile.component.html',
  styleUrls: ['./main-category-tile.component.scss']
})
export class MainCategoryTileComponent {
  isHovered: boolean = false;

  @Input()
  category!: Category;

  default:string = '_default.svg';
  hover:string = '_hover.svg';

  ngOnInit(){
  }
  

}

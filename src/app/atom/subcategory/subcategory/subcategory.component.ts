import { Component, Input } from '@angular/core';
import { Subcategory } from 'src/app/supplying-stuff/categories';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent {
  
  
  @Input()
  subcategory!: Subcategory;
}

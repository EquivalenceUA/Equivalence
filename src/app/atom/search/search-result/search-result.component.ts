import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from 'db/word-interface';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() results: any;

  constructor(){}




}

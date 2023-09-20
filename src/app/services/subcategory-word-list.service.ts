import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryWordListService {

  subcategoryWordList={};
  subcateg:string = "";

  constructor(private _http:HttpClient){}

  getSubcategoryWordList(subcategory:string): Observable<any>{
    this.subcateg = subcategory;
    const searchCat = {subcategory: subcategory};
    return this._http.post('https://equivalenceua.github.io/Equivalence/api/users/subcategory-words', searchCat);
  }

  setSubcateg(subcategory:string){
    this.subcateg = subcategory;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordGetterService {
  private apiUrl = "/api/wordsdatabase/words";

  constructor( private http: HttpClient) { }


  getWordsBySearchTerm(searchTerm: string){
    console.log('search start in service')
    return this.http.get<any>(`${this.apiUrl}?searchTerm=${searchTerm}`);
  }
}

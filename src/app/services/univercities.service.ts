import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnivercitiesService {

  constructor(
    private http: HttpClient
  ) { }

  getUnivercities() {
    return this.http.get('http://universities.hipolabs.com/search?country=ukraine');
  }
}

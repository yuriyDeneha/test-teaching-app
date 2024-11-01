import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnivercitiesService {

  constructor(
    private http: HttpClient
  ) { }

  getUnivercitiesByCountry(country: string = 'ukraine') {
    console.log('getUnivercitiesByCountry: ' + country);
    return this.http.get('http://universities.hipolabs.com/search?country=' + country);
  }
}

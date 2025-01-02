import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Univercity } from '../models/univercity.model';

@Injectable({
  providedIn: 'root'
})
export class UnivercitiesService {

  constructor(
    private http: HttpClient
  ) { }

  getUnivercitiesByCountry(country: string = 'ukraine'): Observable<Univercity[]> {
    // console.log('getUnivercitiesByCountry: ' + country);
    return this.http.get<Univercity[]>('http://universities.hipolabs.com/search?country=' + country);
  }
}

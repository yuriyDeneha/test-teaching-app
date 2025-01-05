import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Univercity } from '../models/univercity.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getUnivercities(): Observable<Univercity[]> {
    return this.http.get<Univercity[]>(`${this.apiUrl}/univercities`);
  }

  getUnivercity(id: number): Observable<Univercity> {
    return this.http.get<Univercity>(`${this.apiUrl}/univercities/${id}`);
  }

  createUnivercity(univercity: Univercity): Observable<Univercity> {
    return this.http.post<Univercity>(`${this.apiUrl}/univercities`, univercity);
  }

  updateUnivercity(id: number, univercity: Univercity): Observable<Univercity> {
    return this.http.put<Univercity>(`${this.apiUrl}/univercities/${id}`, univercity);
  }

  deleteUnivercity(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/univercities/${id}`);
  }
}

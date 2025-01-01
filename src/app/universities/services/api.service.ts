import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }


  createUnivercity(univercity: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/univercities`, univercity);
  }

  getUnivercitys(): Observable<any> {
    return this.http.get(`${this.apiUrl}/univercities`);
  }

  updateUnivercity(id: number, univercity: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/univercities/${id}`, univercity);
  }

  deleteUnivercity(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/univercities/${id}`);
  }
}

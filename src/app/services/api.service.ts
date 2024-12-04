import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  postSignUp(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/sign-up`, dados);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
}

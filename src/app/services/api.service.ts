import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  postSignUp(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/sign-up`, dados);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUser(): Observable<any> {
    const userId = this.localStorageService.get('userId');
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private authToken: string | null = null;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  login(username: string, password: string): Observable<any> {
    const data = {
      username: username,
      password: password,
    };
    return this.http.post(`${this.apiUrl}/auth/sign-in`, data).pipe(
      tap((response: any) => {
        this.authToken = response.accessToken;
        this.localStorageService.set('authToken', response.accessToken);
      })
    );
  }

  isLoggedIn(): boolean {
    if (this.authToken == this.localStorageService.get('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.localStorageService.remove('authToken');
    this.authToken = null;
    this.router.navigate(['']);
  }
}
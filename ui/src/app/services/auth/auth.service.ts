import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Promise<{access_token: string}> {
    return this.httpClient.post<{access_token: string}>('/api/auth/login', { username, password }).toPromise();
  }
}

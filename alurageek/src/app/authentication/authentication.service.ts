import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  autenticar(user: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users', {
      email: user,
      password: password,
    });
  }
}


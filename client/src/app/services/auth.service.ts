import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from '../models/login/loginViewModel';
import { RegisterVievModel } from '../models/register/registerViewModel';
import { UserManagerResponse } from '../models/userManagerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  register(model: RegisterVievModel) {
    return this.http.post<UserManagerResponse>(this.baseUrl + 'auth/register', model);
  }

  login(model: LoginViewModel) {
    return this.http.post<UserManagerResponse>(this.baseUrl + 'auth/login', model);
  }
}

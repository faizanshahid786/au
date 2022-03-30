import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(
      environment.baseURL + `/users?email=${username}&password=${password}`
    );
  }
}

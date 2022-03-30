import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  regsiteredUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(environment.baseURL + '/users', data);
  }
}

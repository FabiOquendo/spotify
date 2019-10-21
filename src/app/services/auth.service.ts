import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { USER } from '../mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Promise<boolean> {
    if(user.username == USER.username &&
      user.password == USER.password) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
  }

  getToken(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let client_id = '695682963bc6484d87af345f5d55fa84';
    let client_secret = '91ff11fef7f747e6a323743b3787cc84';
    return this.http.get<any>(`http://localhost:3000/spotify/${ client_id }/${ client_secret }`, {headers});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQArJSTZjh9ul3enJAnh-ZCozDWGGe0PoSYYSe1dI6e4EpX650NWpX7B978UMQ72Lgwzir9ZshdeWceNdYY'
    });
    return this.http.get<any>(`https://api.spotify.com/v1/users/${ username }`, {headers});
  }

}

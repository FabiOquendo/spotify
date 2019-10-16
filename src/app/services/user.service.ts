import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAUTxCnyiilYsd3anvkw2uUBpChRVlVs2yw8v83vHmEuDM6j3sstE1FFiMh5NeNpXBdz3ZFEmHQwFZ2hbU'
    });
    return this.http.get<any>('https://api.spotify.com/v1/users/fabioquendo', {headers});
  }

}

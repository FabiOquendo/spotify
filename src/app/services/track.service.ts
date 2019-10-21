import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  getTracks(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<any>(`https://api.spotify.com/v1/search?query=${ query }&type=track&market=CO&offset=0&limit=20`, {headers});
  }

  getTrack(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<any>(`https://api.spotify.com/v1/tracks/${ id }`, {headers});
  }
}

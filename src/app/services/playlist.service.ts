import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylistsUser(user: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAUTxCnyiilYsd3anvkw2uUBpChRVlVs2yw8v83vHmEuDM6j3sstE1FFiMh5NeNpXBdz3ZFEmHQwFZ2hbU'
    });
    return this.http.get<any>(`https://api.spotify.com/v1/users/${ user }/playlists?offset=0&limit=20`, {headers});
  }
}

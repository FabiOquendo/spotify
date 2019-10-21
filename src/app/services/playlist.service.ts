import { Injectable, getDebugNode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylistsUser(user: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<any>(`https://api.spotify.com/v1/users/${ user }/playlists?offset=0&limit=20`, {headers});
  }

  getPlaylistsTracks(playlist_id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<any>(`https://api.spotify.com/v1/playlists/${ playlist_id }/tracks?offset=0&limit=20`, {headers});
  }
}



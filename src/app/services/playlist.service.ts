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
      'Authorization': 'Bearer BQArJSTZjh9ul3enJAnh-ZCozDWGGe0PoSYYSe1dI6e4EpX650NWpX7B978UMQ72Lgwzir9ZshdeWceNdYY'
    });
    return this.http.get<any>(`https://api.spotify.com/v1/users/${ user }/playlists?offset=0&limit=20`, {headers});
  }
}

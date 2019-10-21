import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: any = { 'display_name': 'Name', 'followers': {'total': 0} };
  playlists: any;
  playlistsName: string;
  tracks: any;
  display: boolean = false;

  constructor(
    private userService: UserService,
    private playlistService: PlaylistService
  ) {  }

  ngOnInit() {
  }

  search(term: string) {
    this.userService.getUser(term).subscribe(
      data => {
        this.user = data;

        this.playlistService.getPlaylistsUser(this.user.id).subscribe(
          list => {
            this.playlists = list.items;
          }
        );
      }
    );
  }

  getTracks(playlist: any) {
    this.playlistsName = playlist.name;
    this.playlistService.getPlaylistsTracks(playlist.id).subscribe(
      data => {
        this.tracks = data.items;
        console.log(this.tracks);
        this.display = true;
      }
    );
  }
}

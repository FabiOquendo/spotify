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

  constructor(
    private userService: UserService,
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    
  }

  search(term: string) {
    this.userService.getUser(term).subscribe(
      data => {
        console.log(data);
        this.user = data;

        this.playlistService.getPlaylistsUser(this.user.id).subscribe(
          list => {
            console.log(list.items);
            this.playlists = list.items;
          }
        );
      }
    );
  }
}

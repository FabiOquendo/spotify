import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tracks: any[] = [];
  track: any
  display: boolean = false;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.trackService.getTracks(term).subscribe(
      data => {
        this.tracks = data.tracks.items;
      }
    );
  }

  openTrack(track: any) {
    console.log(track);
    this.track = track;
    this.display = true;
  }
}

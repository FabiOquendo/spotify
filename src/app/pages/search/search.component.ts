import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tracks: any[] = [];

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.trackService.getTracks(term).subscribe(
      data => {
        console.log(data.tracks.items);
        this.tracks = data.tracks.items;
      }
    )
  }
}

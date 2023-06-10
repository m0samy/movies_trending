import { Component , OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  constructor(private _TrendingService:TrendingService)
  {}

  mediaType:string = 'tv';
  tv:any [] = [];
  ngOnInit(): void {
    this._TrendingService.getTv().subscribe({
      next: (response) => {
        this.tv = response.results
      }
    })
  }
}

import { Component , OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private _TrendingService:TrendingService)
  {}

  mediaType:string = 'movie';
  movies:any [] = [];
  ngOnInit(): void {
    this._TrendingService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results
        // console.log(response.results);
      }
    })
  }
}

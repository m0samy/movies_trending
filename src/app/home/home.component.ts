import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _TrendingService:TrendingService)
  {}

  trendingMovies:any [] = [];
  trendingTv:any [] = [];
  trendingPeople:any [] = [];

  ngOnInit(): void {
    this._TrendingService.getTrending('movie').subscribe({
      next:(response) => {
        this.trendingMovies = response.results;
        
      }
    })
    this._TrendingService.getTrending('tv').subscribe({
      next:(response) => {
        this.trendingTv = response.results;
        
      }
    })
    this._TrendingService.getTrending('person').subscribe({
      next:(response) => {
        this.trendingPeople = response.results;
        
      }
    })
  }
}

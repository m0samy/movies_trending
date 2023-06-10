import { Component , OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  constructor(private _TrendingService:TrendingService)
  {

  }
  mediaType:string = 'person';
  actors:any[] = [];
  ngOnInit(): void {
    this._TrendingService.getActors().subscribe({
      next: (response) => {
        this.actors = response.results;
      }
    })
  }
}

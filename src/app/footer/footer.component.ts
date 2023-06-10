import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  isLogin:boolean = false;
  constructor(private _AuthService:AuthService)
  {
    _AuthService.user.subscribe({
      next:() => {
        if(_AuthService.user.getValue() !== null) {
          this.isLogin = true
        }
        else {
          this.isLogin = false;
        }
      }
    })
  }
}

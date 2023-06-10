import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import  jwtDecode  from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router)
  {
    //عشان لما يعمل ريلود ميعملش لوج اوت لوحدو
    if(localStorage.getItem('userToken') !== null) {
      this.decodedUserData();
    }
  }


  register(userData:object): Observable <any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup' , userData)
  }

  login(userData:object) :Observable<any>
  {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin` , userData)
  }
  decodedUserData()
  {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    // console.log(decodedToken);
    this.user.next(decodedToken);
  }

  logOut()
  {
    localStorage.removeItem('userToken');
    this.user.next(null);
    this._Router.navigate(['/login']);

  }


}

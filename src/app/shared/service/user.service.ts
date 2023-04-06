import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient,
  ) { }
  url=environment.baseUrl

  userLogin(uname:any,pwd:any){
    return this.http.get(`${this.url}/user/login?username=${uname}&password=${pwd}`)
  }
}

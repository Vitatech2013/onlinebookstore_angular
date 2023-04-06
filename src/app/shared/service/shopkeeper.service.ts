import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopkeeperService {

  constructor(private http:HttpClient) { }
url=environment.baseUrl

  shopkeeperlogin(uname:any,pwd:any){
    return this.http.get(`${this.url}/shopkeeper/login?username=${uname}&password=${pwd}`)
  }
}

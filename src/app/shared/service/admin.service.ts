import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }
  url=environment.baseUrl

  adminLogin(u:any,p:any){
    return this.http.get(`${this.url}/admin/login?username=${u}&password=${p}`)
  }
}

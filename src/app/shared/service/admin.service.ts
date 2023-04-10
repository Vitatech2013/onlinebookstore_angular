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
  getAdminFromLocal(){
    return JSON.parse(sessionStorage.getItem('admin')!)
  }

  adminLogin(u:any,p:any){
    return this.http.get(`${this.url}/admin/login?username=${u}&password=${p}`)
  }
  viewShopKeepers(){
    return this.http.get(`${this.url}/admin/viewShopKeepers`)
  }
  deleteShopkeeper(id:any){
    return this.http.delete(`${this.url}/admin/deleteshop/${id}`)
  }
  viewAllUsers(){
    return this.http.get(`${this.url}/admin/viewUsers`)
  }
  viewAllBooks(){
    return this.http.get(`${this.url}/admin/viewBooks`)
  }
  downloadBook(id:any){
    return this.http.get(`${this.url}/admin/download/${id}`)
  }
  queries(){
    return this.http.get(`${this.url}/admin/viewQueries`)
  }
  changePassword(id:any,data:any){
    return this.http.put(`${this.url}/admin/updatepassword/${id}`,data)
  }
}

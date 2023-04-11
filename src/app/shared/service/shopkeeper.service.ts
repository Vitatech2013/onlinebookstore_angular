import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopkeeperService {
  category=['engineering','novals']

  subcategories=[
    {id:'engineering', name:'EEE'},
    {id:'engineering', name:'CSE'},
    {id:'novals', name:'biography'},
    {id:'novals', name:'stories'}
  ]

  constructor(private http:HttpClient) { }
url=environment.baseUrl

  getShopKeeperFromLocal(){
    return JSON.parse(sessionStorage.getItem('shopkeeper')!)
  }

  shopkeeperlogin(uname:any,pwd:any){
    return this.http.get(`${this.url}/shopkeeper/login?username=${uname}&password=${pwd}`)
  }
  shopkeeperRegister(data:any){
    return this.http.post(`${this.url}/shopkeeper/registration`,data)
  }
  shopkeeperProfile(id:any){
    return this.http.get(`${this.url}/shopkeeper/viewProfile/${id}`)
  }
  updateProfile(id:any,data:any){
    return this.http.put(`${this.url}/shopkeeper/updateProfile/${id}`,data)
  }
  viewUsers(){
    return this.http.get(`${this.url}/shopkeeper/viewUsers`)
  }
  viewBooks(uname:any){
    return this.http.get(`${this.url}/shopkeeper/viewBooks?username=${uname}`)
  }
  viewQueriesByShop(sname:any){
    return this.http.get(`${this.url}/shopkeeper/viewQueries?shopname=${sname}`)
  }
  changePassword(id:any,data:any){
    return this.http.put(`${this.url}/shopkeeper/updatepassword/${id}`,data)
  }
  addBook(data:any){
    return this.http.post(`${this.url}/shopkeeper/addBooks`,data)
  }
  deleteBook(id:any){
    return this.http.delete(`${this.url}/shopkeeper/deleteBook/${id}`)
  }
  updateBook(id:any,data:any){
    return this.http.put(`${this.url}/shopkeeper/updateBook/${id}`,data)
  }
}
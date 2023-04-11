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

    getUserFromLocal(){
      return JSON.parse(sessionStorage.getItem('user')!)
    }
    registerUser(data:any){
      return this.http.post(`${this.url}/user/registration`,data)
    }

  userLogin(uname:any,pwd:any){
    return this.http.get(`${this.url}/user/login?username=${uname}&password=${pwd}`)
  }
  viewUserProfile(id:any){
    return this.http.get(`${this.url}/user/viewProfile/${id}`)
  }
  updateUserProfile(id:any,data:any){
    return this.http.put(`${this.url}/user/updateProfile/${id}`,data)
  }
  viewShops(){
    return this.http.get(`${this.url}/user/viewShops`)
  }
  addQueries(data:any){
    return this.http.post(`${this.url}/user/addQueries`,data)
  }
viewQueries(u:any){
    return this.http.get(`${this.url}/user/viewQueries?username=${u}`)
  }
viewBooks(u:any){
  return this.http.get(`${this.url}/user/viewBooks?username=${u}`)
}
changePassword(id:any,data:any){
  return this.http.put(`${this.url}/user/updatepassword/${id}`,data)
}
searchBooks(b:any, a:any){
  return this.http.get(`${this.url}/user/searchBooks?bookname=${b}&author=${b}`)
}

viewFavourites(u:any){
  return this.http.get(`${this.url}/user/viewFavourites?username=${u}`)
}
}

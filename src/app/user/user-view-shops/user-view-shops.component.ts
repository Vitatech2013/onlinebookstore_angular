import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-view-shops',
  templateUrl: './user-view-shops.component.html',
  styleUrls: ['./user-view-shops.component.scss']
})
export class UserViewShopsComponent implements OnInit {
  shops:any
  dId:any
  shopBooks:any
  user:any
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.user=this.userService.getUserFromLocal()
    this.dId=document.getElementById('viewShopBooks')
    this.userService.viewShops().subscribe((res:any)=>{
      this.shops=res
    })
  }
  showBooksinshop(s:any){
    this.userService.viewBooks(s).subscribe((res:any)=>{
      this.shopBooks=res
      this.dId.showModal()
    })
    
  }
  downloadBook(fileUrl:any){
window.open(fileUrl)
  }
  buyBook(b:any){
let value=window.prompt('enter book value')
if(value==b.price){
  let data={
    skusername:b.username,
    username:this.user.username,
    category:b.category,
    subcategory:b.subcategory,
    bookname:b.bookname,
    author:b.author,
    publisher:b.publisher,
    volume:b.volume,
    price:b.price,
    image:b.image,
    file:b.file
  }
 this.userService.orderBooks(data).subscribe((res:any)=>{
  alert('book purchased successfully')
  this.dId.close()
 })
  
}

  }
  addFavouritesList(b:any){
    let data={
      username:this.user.username,
      bookname:b.bookname,
      author:b.author,
      publisher:b.publisher,
      volume:b.volume,
      image:b.image
    }
    this.userService.addFavourites(data).subscribe((res:any)=>{
   this.dId.close()
      
    })
  }
}

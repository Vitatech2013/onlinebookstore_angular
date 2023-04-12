import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-searchbooks',
  templateUrl: './user-searchbooks.component.html',
  styleUrls: ['./user-searchbooks.component.scss']
})
export class UserSearchbooksComponent implements OnInit {
searchBookForm!:FormGroup
books:any
searchTable=false
user:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.user=this.userService.getUserFromLocal()
    this.searchBookForm=this.fb.group({
      bookname:['',[Validators.required]]
    })
  }
  searchBook(){
    this.searchTable=true
    let b=this.searchBookForm.value.bookname
this.userService.searchBooks(b,b).subscribe((res:any)=>{
  this.books=res
  
})
  }
  downloadBook(url:any){
    window.open(url)
  }
  addtoFavourites(b:any){
    let data={
      username:this.user.username,
      bookname:b.bookname,
      author:b.author,
      publisher:b.publisher,
      volume:b.volume,
      image:b.image
    }
    this.userService.addFavourites(data).subscribe((res:any)=>{
 
      
    })
  }
}

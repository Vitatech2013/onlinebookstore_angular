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
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
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
}

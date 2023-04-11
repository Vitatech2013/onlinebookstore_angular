import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-add-queries',
  templateUrl: './user-add-queries.component.html',
  styleUrls: ['./user-add-queries.component.scss']
})
export class UserAddQueriesComponent implements OnInit {
  addQueryForm!:FormGroup
  shops:any
  books:any
  author:any
  user:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
   this.user= this.userService.getUserFromLocal()
    this.userService.viewShops().subscribe((res:any)=>{
      this.shops=res  
    })
    this.addQueryForm=this.fb.group({
      shopname:['',[Validators.required]],
      bookname:['',[Validators.required]],
      author:['',[Validators.required]],
      description:['',[Validators.required]],
    })
  }
selectedShop(shop:any){
  let user=this.shops.find((x:any)=>x.shopname==shop)
  this.userService.viewBooks(user.username).subscribe((res:any)=>{
    this.books=res
  })
}
selectedBook(b:any){
  console.log(b);
 this.author=this.books.find((f:any)=>f.bookname==b)
 console.log(this.author);
 
this.addQueryForm.patchValue({
  author:this.author.author
})
}
addingQuery(){
  if(this.addQueryForm.valid){
    let data={
      username:this.user.username,
      ...this.addQueryForm.value
    }
    this.userService.addQueries(data).subscribe((res:any)=>{
      alert('added successfully')
      this.addQueryForm.reset()
    })
  }else{
    alert('please fill required fields')
  }
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-add-books',
  templateUrl: './shopkeeper-add-books.component.html',
  styleUrls: ['./shopkeeper-add-books.component.scss']
})
export class ShopkeeperAddBooksComponent implements OnInit {
addBookForm!:FormGroup
imgurl:any
categories:any
subcategories:any
bookurl:any
  constructor(
    private fb:FormBuilder,
    private shopkeeperService:ShopkeeperService
  ) { }

  ngOnInit(): void {
    this.categories=this.shopkeeperService.category
    this.addBookForm=this.fb.group({
      category:['',[Validators.required]],
      subcategory:['',[Validators.required]],
      bookname:['',[Validators.required]],
      author:['',[Validators.required]],
      publisher:['',[Validators.required]],
      volume:['',[Validators.required]],
      type:['',[Validators.required]],
      price:['',[Validators.required]],
    })
  }
  isCategory(event:any){
    this.subcategories=this.shopkeeperService.subcategories.filter((x:any)=>x.id==event.target.value)
   console.log(this.subcategories);
    
  }
  onSelectImage(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => { 
      this.imgurl = event.target?.result
      }
    }
  }
  onSelectFile(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => { 
      this.bookurl = event.target?.result
      }
    }
  }
  isAddingBook(){
    let name=this.shopkeeperService.getShopKeeperFromLocal().username
    let data={
      ...this.addBookForm.value,
      image:this.imgurl,
      file:this.bookurl,
      username:name
    }
    this.shopkeeperService.addBook(data).subscribe((res:any)=>{
      alert('book added sucessfully')
      this.addBookForm.reset()
    })
    

  }
}

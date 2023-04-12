import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-view-books',
  templateUrl: './shopkeeper-view-books.component.html',
  styleUrls: ['./shopkeeper-view-books.component.scss']
})
export class ShopkeeperViewBooksComponent implements OnInit {
editBookForm!:FormGroup
  allBooks:any
  categories:any
  subcategories:any
dialogId:any
imgurl:any
bookurl:any
selectedbook:any
sk:any
  constructor(
    private fb:FormBuilder,
    private shopkeeperService:ShopkeeperService
  ) { }

  ngOnInit(): void {
    this.dialogId=document.getElementById('editbook')
    this.categories=this.shopkeeperService.category
    this.subcategories=this.shopkeeperService.subcategories
    this.sk=this.shopkeeperService.getShopKeeperFromLocal().username

    this.shopkeeperService.viewBooks(this.sk).subscribe((res:any)=>{
      this.allBooks=res
    })

    this.editBookForm=this.fb.group({
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
  downloadBook(url:any){
    window.open(url)
  }
  deleteBook(id:any){
    let result=confirm('are you sure you want to delete')
    if(result){
    this.shopkeeperService.deleteBook(id).subscribe((res:any)=>{
      window.location.reload()
    })
  }
  }
  editBook(book:any){
    this.selectedbook=book
this.dialogId.showModal()
console.log(book);
this.isCategory(this.selectedbook.category)
this.editBookForm.patchValue({
     category:book.category,
      subcategory:book.subcategory,
      bookname:book.bookname,
      author:book.author,
      publisher:book.publisher,
      volume:book.volume,
      type:book.type,
      price:book.price,
})
  }
isCategory(event:any){
  this.subcategories=this.shopkeeperService.subcategories.filter((x:any)=>x.id==event)
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
  updateBook(){
    if(this.editBookForm.valid){
      if(this.imgurl && this.bookurl){
        let data={
          ...this.editBookForm.value,
          image:this.imgurl,
          file:this.bookurl,
          username:this.sk
        }
        console.log("exsisted");
        
        this.shopkeeperService.updateBook(this.selectedbook._id,data).subscribe((res:any)=>{
          window.location.reload()
        })
        
      }else{
        let data={
          ...this.editBookForm.value,
          image:this.selectedbook.image,
          file:this.selectedbook.file,
          username:this.sk
        }
        console.log('not exsited');
        
        this.shopkeeperService.updateBook(this.selectedbook._id,data).subscribe((res:any)=>{
          window.location.reload()
        })
        
      }
    }else{
    alert('please fill required fields')
    }
  }
}

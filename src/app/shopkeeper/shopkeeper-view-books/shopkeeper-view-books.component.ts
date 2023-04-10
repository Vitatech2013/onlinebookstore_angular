import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-view-books',
  templateUrl: './shopkeeper-view-books.component.html',
  styleUrls: ['./shopkeeper-view-books.component.scss']
})
export class ShopkeeperViewBooksComponent implements OnInit {
allBooks:any
  constructor(
    private shopkeeperService:ShopkeeperService
  ) { }

  ngOnInit(): void {
    let sk=this.shopkeeperService.getShopKeeperFromLocal().username

    this.shopkeeperService.viewBooks(sk).subscribe((res:any)=>{
      this.allBooks=res
    })
  }
  downloadBook(url:any){
    window.open(url)
  }
}

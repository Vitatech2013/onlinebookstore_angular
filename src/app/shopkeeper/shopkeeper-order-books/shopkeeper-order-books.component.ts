import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-order-books',
  templateUrl: './shopkeeper-order-books.component.html',
  styleUrls: ['./shopkeeper-order-books.component.scss']
})
export class ShopkeeperOrderBooksComponent implements OnInit {
  orders:any
  user:any
  constructor(
    private shopKeeper:ShopkeeperService
  ) { }

  ngOnInit(): void {
    this.user=this.shopKeeper.getShopKeeperFromLocal()

    this.shopKeeper.viewMyOrders(this.user.username).subscribe((res:any)=>{
      this.orders=res
    })
  }

}

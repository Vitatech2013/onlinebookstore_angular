import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-view-queries',
  templateUrl: './shopkeeper-view-queries.component.html',
  styleUrls: ['./shopkeeper-view-queries.component.scss']
})
export class ShopkeeperViewQueriesComponent implements OnInit {
allQueries:any
  constructor(
    private shopkeeperService:ShopkeeperService
  ) { }

  ngOnInit(): void {
    let sname=this.shopkeeperService.getShopKeeperFromLocal().shopname
    this.shopkeeperService.viewQueriesByShop(sname).subscribe((res:any)=>{
      this.allQueries=res
    })
  }

}

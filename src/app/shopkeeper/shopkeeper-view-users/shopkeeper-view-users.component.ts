import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-view-users',
  templateUrl: './shopkeeper-view-users.component.html',
  styleUrls: ['./shopkeeper-view-users.component.scss']
})
export class ShopkeeperViewUsersComponent implements OnInit {
users:any
  constructor(
    private shopkeeperservice:ShopkeeperService
  ) { }

  ngOnInit(): void {
    this.shopkeeperservice.viewUsers().subscribe((res:any)=>{
      this.users=res
    })
  }

}

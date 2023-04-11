import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-view-shops',
  templateUrl: './user-view-shops.component.html',
  styleUrls: ['./user-view-shops.component.scss']
})
export class UserViewShopsComponent implements OnInit {
  shops:any
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.viewShops().subscribe((res:any)=>{
      this.shops=res
    })
  }

}

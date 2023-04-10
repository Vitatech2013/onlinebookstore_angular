import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.scss']
})
export class AdminViewUsersComponent implements OnInit {
users:any
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.viewAllUsers().subscribe((res:any)=>{
      this.users=res
      console.log(this.users)
    })
  }

}

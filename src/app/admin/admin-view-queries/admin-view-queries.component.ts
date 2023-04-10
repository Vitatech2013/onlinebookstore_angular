import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-view-queries',
  templateUrl: './admin-view-queries.component.html',
  styleUrls: ['./admin-view-queries.component.scss']
})
export class AdminViewQueriesComponent implements OnInit {
  allQueries:any
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.queries().subscribe((res:any)=>{
      this.allQueries=res
    })
  }

}

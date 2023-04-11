import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-view-queries',
  templateUrl: './user-view-queries.component.html',
  styleUrls: ['./user-view-queries.component.scss']
})
export class UserViewQueriesComponent implements OnInit {
queries:any
username:any
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
this.username=this.userService.getUserFromLocal().username

this.userService.viewQueries(this.username).subscribe((res:any)=>{
  this.queries=res
})
  }

}

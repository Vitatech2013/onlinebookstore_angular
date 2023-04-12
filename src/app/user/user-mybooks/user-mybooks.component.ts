import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-mybooks',
  templateUrl: './user-mybooks.component.html',
  styleUrls: ['./user-mybooks.component.scss']
})
export class UserMybooksComponent implements OnInit {
  myBooks:any
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    let uname=this.userService.getUserFromLocal().username

    this.userService.viewOrders(uname).subscribe((res:any)=>{
      this.myBooks=res
    })
  }
  downloadBook(url:any){
    window.open(url)
  }
}

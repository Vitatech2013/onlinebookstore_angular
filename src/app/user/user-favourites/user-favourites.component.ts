import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-favourites',
  templateUrl: './user-favourites.component.html',
  styleUrls: ['./user-favourites.component.scss']
})
export class UserFavouritesComponent implements OnInit {
  favourites:any
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    let user=this.userService.getUserFromLocal().username
    this.userService.viewFavourites(user).subscribe((res:any)=>{
      this.favourites=res
    })
  }

}

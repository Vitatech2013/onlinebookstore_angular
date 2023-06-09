import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  logOut(){
    sessionStorage.removeItem('user')
    this.router.navigate(['/welcome/user-login'])
  }
}

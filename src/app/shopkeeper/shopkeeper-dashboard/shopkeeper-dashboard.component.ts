import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopkeeper-dashboard',
  templateUrl: './shopkeeper-dashboard.component.html',
  styleUrls: ['./shopkeeper-dashboard.component.scss']
})
export class ShopkeeperDashboardComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  logOut(){
    sessionStorage.removeItem('shopkeeper')
    this.router.navigate(['/welcome/shopkeeper-login'])
  }
}

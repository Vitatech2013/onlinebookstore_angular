import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-login',
  templateUrl: './shopkeeper-login.component.html',
  styleUrls: ['./shopkeeper-login.component.scss']
})
export class ShopkeeperLoginComponent implements OnInit {
  shopkeeperLoginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private shopKeeperService:ShopkeeperService
  ) { }

  ngOnInit(): void {
    this.shopkeeperLoginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
skLogin(){
  let uname=this.shopkeeperLoginForm.value.username
  let pwd=this.shopkeeperLoginForm.value.password
if(this.shopkeeperLoginForm.valid){
  this.shopKeeperService.shopkeeperlogin(uname,pwd).subscribe((res:any)=>{
    alert('success')
  })
}
}
}

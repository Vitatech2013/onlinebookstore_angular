import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-change-pwd',
  templateUrl: './shopkeeper-change-pwd.component.html',
  styleUrls: ['./shopkeeper-change-pwd.component.scss']
})
export class ShopkeeperChangePwdComponent implements OnInit {
changePWDForm!:FormGroup
uname:any
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private shopkeeperService:ShopkeeperService
  ) { }

  ngOnInit(): void {
    this.uname=this.shopkeeperService.getShopKeeperFromLocal()
    this.changePWDForm=this.fb.group({
      username:[this.uname.username,[Validators.required]],
      password:['',[Validators.required]],
      newpassword:['',[Validators.required]]
    })
  }
changePWD(){
  if(this.changePWDForm.valid){
    let data={
      password:this.changePWDForm.value.newpassword
    }
    if(this.uname.password==this.changePWDForm.value.password){
    this.shopkeeperService.changePassword(this.uname._id, data).subscribe((res:any)=>{
      alert('password updated successfully')
      sessionStorage.removeItem('admin')
      this.router.navigate(['/welcome/shopkeeper-login'])
    })
  }else{
    alert('old password not matching')
  }
  }else{
    alert('please fill all required fieldes')
  }
}
}

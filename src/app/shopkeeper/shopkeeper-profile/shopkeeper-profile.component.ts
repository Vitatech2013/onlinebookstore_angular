import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-profile',
  templateUrl: './shopkeeper-profile.component.html',
  styleUrls: ['./shopkeeper-profile.component.scss']
})
export class ShopkeeperProfileComponent implements OnInit {
  shopkeeperEditForm!:FormGroup
  skData:any
  shopkeeper:any
  constructor(
    private fb:FormBuilder,
    private shopkeeperService:ShopkeeperService
  ) {

   }

  ngOnInit(): void {
    this.shopkeeperEditForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      address:['',[Validators.required]],
      shopname:['',[Validators.required]],
      branch:['',[Validators.required]],
      shopaddress:['',[Validators.required]],
    })
    this.skData=this.shopkeeperService.getShopKeeperFromLocal()
    this.shopkeeperService.shopkeeperProfile(this.skData._id).subscribe((res:any)=>{
      this.shopkeeper=res
      this.shopkeeperEditForm.patchValue({
        firstname:this.shopkeeper.firstname,
        lastname:this.shopkeeper.lastname,
        username:this.shopkeeper.username,
        password:this.shopkeeper.password,
        mobileno:this.shopkeeper.mobileno,
        emailid:this.shopkeeper.emailid,
        address:this.shopkeeper.address,
        shopname:this.shopkeeper.shopname,
        branch:this.shopkeeper.branch,
        shopaddress:this.shopkeeper.shopaddress,
      })
    })
    

  }
  isUpdate(){
    console.log(this.shopkeeperEditForm.value);
    
    if(this.shopkeeperEditForm.valid){
      this.shopkeeperService.updateProfile(this.skData._id,this.shopkeeperEditForm.value).subscribe((res:any)=>{
        alert('updated successfully')
      })
    }

  }
}

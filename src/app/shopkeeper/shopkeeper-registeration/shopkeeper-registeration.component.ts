import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopkeeperService } from 'src/app/shared/service/shopkeeper.service';

@Component({
  selector: 'app-shopkeeper-registeration',
  templateUrl: './shopkeeper-registeration.component.html',
  styleUrls: ['./shopkeeper-registeration.component.scss']
})
export class ShopkeeperRegisterationComponent implements OnInit {
  shopkeeperRegistrationForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private skService:ShopkeeperService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.shopkeeperRegistrationForm=this.fb.group({
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
  }
isRegister(){
  if(this.shopkeeperRegistrationForm.valid){
    this.skService.shopkeeperRegister(this.shopkeeperRegistrationForm.value).subscribe((res:any)=>{
      alert('register successfully')
      this.router.navigate(['/welcome/shopkeeper-login'])
    })
  }

}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
userProfileForm!:FormGroup
userid:any
user:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userid=this.userService.getUserFromLocal()._id
    this.userProfileForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      address:['',[Validators.required]],
    })
    this.userService.viewUserProfile(this.userid).subscribe((res:any)=>{
      this.user=res
      this.userProfileForm.patchValue({
        firstname:this.user.firstname,
        lastname:this.user.lastname,
        username:this.user.username,
        password:this.user.password,
        mobileno:this.user.mobileno,
        emailid:this.user.emailid,
        address:this.user.address,
      })
      
    })
  }
  userUpdate(){
    if(this.userProfileForm.valid){
      this.userService.updateUserProfile(this.userid,this.userProfileForm.value).subscribe((res:any)=>{
        this.user=res
        alert('updated successfully')
      })
    }else{
      alert('please fill required fields')
    }
    
  }
}

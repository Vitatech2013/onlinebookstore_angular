import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.scss']
})
export class UserChangePasswordComponent implements OnInit {
  changePWDForm!:FormGroup
  user:any
  userid:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router
  ) {
   }

  ngOnInit(): void {
    this.userid=this.userService.getUserFromLocal()
  
    this.changePWDForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      newpassword:['',[Validators.required]]
    })
    this.userService.viewUserProfile(this.userid._id).subscribe((res:any)=>{
      this.user=res
      this.changePWDForm.patchValue({
        username:this.user.username
      })
    })
  }
changePWD(){
  if(this.changePWDForm.valid){
    let data={
      password:this.changePWDForm.value.newpassword
    }
    if(this.userid.password==this.changePWDForm.value.password){
    this.userService.changePassword(this.userid._id, data).subscribe((res:any)=>{
      alert('password updated successfully')
      sessionStorage.removeItem('user')
      this.router.navigate(['/welcome/user-login'])
    })
  }else{
    alert('old password not matching')
  }
  }else{
    alert('please fill all required fieldes')
  }
}
}


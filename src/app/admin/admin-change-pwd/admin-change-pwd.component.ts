import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-change-pwd',
  templateUrl: './admin-change-pwd.component.html',
  styleUrls: ['./admin-change-pwd.component.scss']
})
export class AdminChangePwdComponent implements OnInit {
adminChangePWDForm!:any
uname:any
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.uname=this.adminService.getAdminFromLocal()
    this.adminChangePWDForm=this.fb.group({
      username:[this.uname.username,[Validators.required]],
      password:['',[Validators.required]],
      newpassword:['',[Validators.required]]
    })
  }
  changePWD(){
    if(this.adminChangePWDForm.valid){
      let data={
        password:this.adminChangePWDForm.value.newpassword
      }
      if(this.uname.password==this.adminChangePWDForm.value.password){
      this.adminService.changePassword(this.uname._id, data).subscribe((res:any)=>{
        alert('password updated successfully')
        sessionStorage.removeItem('admin')
        this.router.navigate(['/welcome/admin-login'])
      })
    }else{
      alert('old password not matching')
    }
    }else{
      alert('please fill all required fieldes')
    }
  }
}

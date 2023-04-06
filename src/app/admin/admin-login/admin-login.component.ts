import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminloginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.adminloginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  adminLogin(){
    if(this.adminloginForm.valid){
      this.adminService.adminLogin(this.adminloginForm.value.username,this.adminloginForm.value.password).subscribe((res:any)=>{
        if(res){
          sessionStorage.setItem('admin', JSON.stringify(res))
          this.router.navigate(['admin-dashboard'])
        }else{
          alert('invalid credentials')
        }
        
      })
    }else{
      alert('please fill required fields')
    }
  }
}

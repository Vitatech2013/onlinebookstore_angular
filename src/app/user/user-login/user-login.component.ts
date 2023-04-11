import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
userLogin!:FormGroup
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.userLogin=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  login(){
    if(this.userLogin.valid){
      this.userService.userLogin(this.userLogin.value.username,this.userLogin.value.password).subscribe((res:any)=>{
        if(res){
          sessionStorage.setItem('user', JSON.stringify(res))
          this.router.navigate(['/user-dashboard'])
        }else{
          alert('user not found')
        }
        
      })
      
    }

  }

}

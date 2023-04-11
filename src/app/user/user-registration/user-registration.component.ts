import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userRegistrationForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userRegistrationForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      address:['',[Validators.required]],
    })
  }
isRegister(){
if(this.userRegistrationForm.valid){
this.userService.registerUser(this.userRegistrationForm.value).subscribe((res:any)=>{
this.router.navigate(['/welcome/user-login'])
})
  
}else{
  alert('please fill required fields')
}
}
}

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-view-shopkeepers',
  templateUrl: './admin-view-shopkeepers.component.html',
  styleUrls: ['./admin-view-shopkeepers.component.scss']
})
export class AdminViewShopkeepersComponent implements OnInit {
shopKeepers:any
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.viewShopKeepers().subscribe((res:any)=>{
      this.shopKeepers=res
    })
}

deleteshopkeeper(id:any){
 let result=confirm('are you sure you want to delete?')
 if(result){
this.adminService.deleteShopkeeper(id).subscribe((res:any)=>{
  location.reload()
})
 }else{

 } 
}

}

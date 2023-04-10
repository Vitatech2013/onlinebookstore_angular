import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-view-books',
  templateUrl: './admin-view-books.component.html',
  styleUrls: ['./admin-view-books.component.scss']
})
export class AdminViewBooksComponent implements OnInit {
allBooks:any
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.viewAllBooks().subscribe((res:any)=>{
      this.allBooks=res
      console.log(this.allBooks);
      
    })
  }
  downloadBook(url:any){
    window.open(url)
  }
}

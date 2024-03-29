import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ScheduleComponent } from 'src/app/schedule/schedule.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search:any
location:any;
userName:string='';
isUserPresent=false;
constructor(private userService:UserService,private router:Router,private dialogRef:MatDialog){
 
}
  ngOnInit(): void {
    const searchItem=sessionStorage.getItem("searchedRestOrType")
  const locationItem=sessionStorage.getItem("searchedLocation")
  this.search=JSON.parse(searchItem!)
  this.location=JSON.parse(locationItem!)
  this.userName=this.userService.firstName;
  if(sessionStorage.getItem("token")&& this.userName!=null){
    this.isUserPresent=true
  }
  else{
    this.isUserPresent=false
  }
}

goToCart(){
this.router.navigateByUrl('explore/cart')
}

schedule(){
  this.dialogRef.open(ScheduleComponent);
}
  }

    


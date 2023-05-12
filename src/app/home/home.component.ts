import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit{
  minDate = new Date();
  time:any;
  login:any;
  searchForm!:FormGroup
  // date1:string;
constructor(private dialogRef:MatDialog,private datePipe: DatePipe,private router: Router,private fb: FormBuilder){
//   const date1=this.datePipe.transform(Date.now(),'Today,MMM d, y');
this.createForm();
}
createForm() {
  this.searchForm = this.fb.group({
    search: ['',[ Validators.required]],
    location: ['',[ Validators.required]],
    // mobileNumber:['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
  });
}
  ngOnInit(): void {
   
    if (sessionStorage.getItem('token')) {
      this.login = true;
    }
    else {
      this.login = false;
    }
  }
  date1 = new FormControl(new Date())

openRegisterPopup(){
  this.dialogRef.open(RegisterComponent);
}
openLoginPopup(){
  this.dialogRef.open(LoginComponent);
}
goToDashboard(){
  if(this.searchForm.valid){
   
    sessionStorage.setItem('searchedRestOrType', JSON.stringify(this.searchForm.get('search')!.value));
    sessionStorage.setItem('searchedLocation', JSON.stringify(this.searchForm.get('location')!.value));
    console.log( sessionStorage.getItem('searchedRestOrType'));
    this.router.navigateByUrl("/explore");
  
  
}
}
}

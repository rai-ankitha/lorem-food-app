import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  minDate = new Date();
  // date1:string;
constructor(private dialogRef:MatDialog,private datePipe: DatePipe){
//   const date1=this.datePipe.transform(Date.now(),'Today,MMM d, y');
}

date1 = new FormControl(new Date())
openRegisterPopup(){
  this.dialogRef.open(RegisterComponent);
}
openLoginPopup(){
  this.dialogRef.open(LoginComponent);
}
}

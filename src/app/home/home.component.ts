import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
constructor(private dialogRef:MatDialog){}
openRegisterPopup(){
  this.dialogRef.open(RegisterComponent);
}
openLoginPopup(){
  this.dialogRef.open(LoginComponent);
}
}

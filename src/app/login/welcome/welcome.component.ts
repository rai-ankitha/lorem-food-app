import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private router:Router,private dialogRef:MatDialogRef<WelcomeComponent>){}
 emailId:string=''
  ngOnInit(): void {
    this.emailId=JSON.parse(sessionStorage.getItem('email') as string);
  }
  goToHome(){
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit{
  emailForm!:FormGroup;
  constructor(private router: Router,private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.emailForm = this.fb.group({
      primaryEmail: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]]
    });
  }
  ngOnInit(): void {
   
  }
  
  isLogin=false;
  isCreateBool:boolean=false;
  isCreate(){
    console.log("submitted")
    if(this.emailForm.valid){
      this.isCreateBool=true;
      console.log("submitted!!")
    }

  }
  loginPage(){
    // this.router.navigate(['/register', 'register2']);
    this.isLogin=true;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/restaurant-list';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  isSendOtp=false;
  forgotForm!:FormGroup;
  notFocused=false;
  constructor(private router: Router,private fb: FormBuilder,private authService:AuthenticationService) {
    this.createForm();
  }
  createForm() {
    this.forgotForm = this.fb.group({
      forgotEmail: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]],
      
    });
  }
  sendOtpFunc(){
    if(this.forgotForm.valid){
      this.authService.postEmail(this.forgotForm.get('forgotEmail')!.value).subscribe({
        next: (v:ApiResponse) => {
          this.authService
          .generateOtp(this.forgotForm.get('forgotEmail')!.value)
          .subscribe({
            next: (v: ApiResponse) => alert(v.message),
            error: (e) => alert(e.error.message),
          });},
        error: (e) => alert(e.error.message),
        complete: () => {
          sessionStorage.setItem('email', JSON.stringify(this.forgotForm.get('forgotEmail')!.value)as any );
          console.log("  otp sent!!")
      this.isSendOtp=true;
        }
      });
     
    }
   
  }
  isEmailTab=true;
  isMobileTab=false;
  emailTab(){
    this.isEmailTab=true;
    this.isMobileTab=false
  }
  mobileTab(){
this.isMobileTab=true;
this.isEmailTab=false;
  }
 
}

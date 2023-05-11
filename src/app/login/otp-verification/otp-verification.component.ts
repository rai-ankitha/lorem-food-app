import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from 'src/app/models/restaurant-list';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otpForm!:FormGroup;
 
  constructor(private fb: FormBuilder,private authService:AuthenticationService) {
    this.createForm();
  }
  createForm() {
    this.otpForm = this.fb.group({
      otp: ['',[ Validators.required]]
    });
  }
 isVerify:boolean=false;
 isVerifyFunc(){
  if(this.otpForm.valid){

  this.authService.verifyEmail(JSON.parse(sessionStorage.getItem('email')as any),this.otpForm.get('otp')!.value,false).subscribe({
    next: (value:ApiResponse) => {console.log(value.message)
    sessionStorage.setItem('secretCode',JSON.stringify(value.secretCode)as any);
    },
    error: (e) => alert(e.error.message),
    complete: () => {
      this.isVerify=true;
      console.log("otp submitted!!")
    }
  });

}
 }
}

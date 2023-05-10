import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      primaryEmail: ['',[ Validators.required]]
    });
  }
 isVerify:boolean=false;
 isVerifyFunc(){
  if(this.otpForm.valid){
  this.authService.verifyEmail(JSON.parse(sessionStorage.getItem('email')as any),this.otpForm.get('otp')!.value,false).subscribe({
    next: (v) => alert(v),
    error: (e) => alert(e.error),
    complete: () => {
      this.isVerify=true;
      console.log("otp submitted!!")
    }
  });

}
 }
}

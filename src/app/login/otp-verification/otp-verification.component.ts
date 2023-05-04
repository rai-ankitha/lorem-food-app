import { Component } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
isVerify=false;
verifyFunc(){
  this.isVerify=true;
}
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/restaurant-list';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-new-password-input',
  templateUrl: './new-password-input.component.html',
  styleUrls: ['./new-password-input.component.css']
})
export class NewPasswordInputComponent {
  forgotForm!:FormGroup;
  hide=true;
  notFocused=false;
  constructor(private router: Router,private fb: FormBuilder,private authService:AuthenticationService) {
    this.createForm();
  }
  createForm() {
    this.forgotForm = this.fb.group({
      password: ['', [
        Validators.required, 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
     ]],
    });
  }
  isSuccess=false;
  isSuccessFunc(){
    if(this.forgotForm.valid){

      this.authService.resetPasswordEmail(JSON.parse(sessionStorage.getItem('email')as any),this.forgotForm.get('password')!.value,JSON.parse(sessionStorage.getItem('secretCode')as any)).subscribe({
        next: (value:ApiResponse) => {alert(value.message)
        },
        error: (e:any) => alert(e.error.message),
        complete: () => {
          console.log("submitted!!");
      this.isSuccess=true;
        }
      });
     
    }

  }
}

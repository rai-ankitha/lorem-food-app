import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password-input',
  templateUrl: './new-password-input.component.html',
  styleUrls: ['./new-password-input.component.css']
})
export class NewPasswordInputComponent {
  forgotForm!:FormGroup;
  hide=true;
  constructor(private router: Router,private fb: FormBuilder) {
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
      console.log("submitted!!");
      this.isSuccess=true;
    }

  }
}

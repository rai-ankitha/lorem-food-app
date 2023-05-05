import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userDetailsForm!:FormGroup;
  hide=true;
  constructor(private router: Router,private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.userDetailsForm = this.fb.group({
      firstName:[null, Validators.required],
      lastName:['', [Validators.required]],
      mobileNumber:['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      password: ['', [
        Validators.required, 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
     ]],
    });
  }
  submit(){
    if(this.userDetailsForm.valid){
      console.log("submitted!!")
    }
  }
}

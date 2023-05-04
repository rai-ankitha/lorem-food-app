import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  loginForm!:FormGroup;
  constructor(private router: Router,private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      loginEmail: new FormControl(['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]]),
      loginPassword:new FormControl( ['', [
        Validators.required, 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
     ]],)
    });
  }
isForgotPassword=false;
forgotPassword(){
  console.log("forgot");
  console.log();
  
  
  this.isForgotPassword=true;
}
isLogin(){
  if(this.loginForm.valid){
    console.log("submitted!!")
  }
}
createNewAccount(){
this.router.navigate(['/register']);
}
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  loginForm!:FormGroup;
  hide=true;
  notFocused = false;
  constructor(private router: Router,private fb: FormBuilder,private authService:AuthenticationService,private userService:UserService) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      loginEmail: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]],
      loginPassword: ['', [
        Validators.required, 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
     ] ],updateOn: 'submit'
    });
  }
isForgotPassword=false;
forgotPassword(){
  console.log("forgot");
  console.log();
  
  
  this.isForgotPassword=true;
}
isSubmit=false;
isLogin(){
  if(this.loginForm.valid){
    this.authService.postLoginDetails(this.loginForm.get('loginEmail')!.value,this.loginForm.get('loginPassword')!.value).subscribe({
      next: (data:any) =>{this.userService.saveUserDetails(data["userDetails"])
      sessionStorage.setItem('token',data["jwtToken"])
      console.log(data["jwtToken"])
      alert(data["message"]);},
      
      error: (e) => alert(e.error.message),
      complete: () => {
        sessionStorage.setItem('email', JSON.stringify(this.loginForm.get('loginEmail')?.value)as any );
       
    console.log("login submitted!!")
    this.isSubmit=true;
      }
    });
   
  }
}
isSignUp=false;
createNewAccount(){
// this.router.navigate(['/home']);
this.isSignUp=true;
}
}

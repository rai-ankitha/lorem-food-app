import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userDetailsForm!:FormGroup;
  hide=true;
  notFocused=false;
  constructor(private fb: FormBuilder,private authService:AuthenticationService,private userService:UserService) {
    this.createForm();
  }
  createForm() {
    this.userDetailsForm = this.fb.group({
      firstName:[null, Validators.required],
      lastName:['', [Validators.required]],
      mobileNumber:['' ,[Validators.pattern("[0-9 ]{10}")]],
      password: ['', [
        Validators.required, 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
     ]],
    });
  }
  isSubmit=false;
  submit(){
    if(this.userDetailsForm.valid){
      this.authService.createUser(JSON.parse(sessionStorage.getItem('email')as any),this.userDetailsForm.get('firstName')!.value,this.userDetailsForm.get("lastName")!.value,this.userDetailsForm.get("mobileNumber")?.value,this.userDetailsForm.get("password")!.value).subscribe({
        next: (data:any) => {
          this.userService.saveUserDetails(data["userDetails"])
          sessionStorage.setItem('token',data["jwtToken"])
          console.log(data["jwtToken"])
          alert(data["message"]);
      
      },
        error: (e) => alert(e.error.message),
        complete: () => {
          console.log(" user details submitted!!")
          sessionStorage.setItem('email',JSON.stringify(this.userService.emailId))
          this.isSubmit=true;
        }
      });
     
    }
  }
}

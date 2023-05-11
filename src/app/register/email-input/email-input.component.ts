import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/restaurant-list';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css'],
})
export class EmailInputComponent implements OnInit {
  emailForm!: FormGroup;
  notFocused = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.createForm();
  }
  createForm() {
    this.emailForm = this.fb.group({
      primaryEmail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }
  ngOnInit(): void {}

  isLogin = false;
  isCreateBool: boolean = false;
  submitted = false;
  create() {
    if (this.emailForm.valid) {
      this.submitted = true;
      this.authService
        .postEmail(this.emailForm.get('primaryEmail')!.value)
        .subscribe({
          next: (v:ApiResponse) => {
            this.submitted = false;
            alert(v.message);
          },
          error: (e) => {
            this.submitted = false;
            this.authService
              .generateOtp(this.emailForm.get('primaryEmail')!.value)
              .subscribe({
                next: (v: ApiResponse) => alert(v.message),
                error: (e) => alert(e.error.message),
                complete: () => {
                  this.submitted = false;
                  sessionStorage.setItem(
                    'email',
                    JSON.stringify(
                      this.emailForm.get('primaryEmail')!.value
                    ) as any
                  );
                  this.isCreateBool = true;
                  console.log('email submitted!!');
                },
              });
          },
        });
    }
  }
  loginPage() {
    this.isLogin = true;
  }
}

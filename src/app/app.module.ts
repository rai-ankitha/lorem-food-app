import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmailInputComponent } from './register/email-input/email-input.component';
import { EmailVerificationComponent } from './register/email-verification/email-verification.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './register/user-details/user-details.component';
import { GetStartedComponent } from './login/get-started/get-started.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './login/otp-verification/otp-verification.component';
import { NewPasswordInputComponent } from './login/new-password-input/new-password-input.component';
import { NewPasswordSuccessComponent } from './login/new-password-success/new-password-success.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    EmailInputComponent,
    EmailVerificationComponent,
    UserDetailsComponent,
    GetStartedComponent,
    ForgotPasswordComponent,
    OtpVerificationComponent,
    NewPasswordInputComponent,
    NewPasswordSuccessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    RouterModule.forRoot([]),
    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

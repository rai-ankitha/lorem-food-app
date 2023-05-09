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
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './register/user-details/user-details.component';
import { GetStartedComponent } from './login/get-started/get-started.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './login/otp-verification/otp-verification.component';
import { NewPasswordInputComponent } from './login/new-password-input/new-password-input.component';
import { NewPasswordSuccessComponent } from './login/new-password-success/new-password-success.component';
import { WelcomeComponent } from './login/welcome/welcome.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { RestaurantSearchComponent } from './main/restaurant-search/restaurant-search.component';
import { RestaurantMenuComponent } from './main/restaurant-menu/restaurant-menu.component';
import { RestaurantDetailsComponent } from './main/restaurant-details/restaurant-details.component';
import { MyOrdersComponent } from './main/restaurant-menu/my-orders/my-orders.component';
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
    NewPasswordSuccessComponent,
    WelcomeComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantSearchComponent,
    RestaurantMenuComponent,
    RestaurantDetailsComponent,
    MyOrdersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    RouterModule.forRoot([]),
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

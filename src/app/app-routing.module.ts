import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailInputComponent } from './register/email-input/email-input.component';
import { EmailVerificationComponent } from './register/email-verification/email-verification.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  // children:[
  //   { path: 'register', component: RegisterComponent,}
  // ]
 },
 
  { path: 'register', component: RegisterComponent,}
  // outlet:'modal',children:[
  //   { path: '/register', redirectTo: 'register1', pathMatch: 'full' },
  //   {path:'register1',component:EmailInputComponent},
  //   {path:'register2',component:EmailVerificationComponent},
  // ] 
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

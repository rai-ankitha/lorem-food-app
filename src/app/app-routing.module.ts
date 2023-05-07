import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailInputComponent } from './register/email-input/email-input.component';
import { EmailVerificationComponent } from './register/email-verification/email-verification.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { RestaurantSearchComponent } from './main/restaurant-search/restaurant-search.component';
import { RestaurantMenuComponent } from './main/restaurant-menu/restaurant-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 {path: 'dashboard', component: MainComponent,
 children: [
  { path: 'search', component:  RestaurantSearchComponent },
  { path: 'restaurant', component: RestaurantMenuComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full'}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

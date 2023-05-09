import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RestaurantSearchComponent } from './main/restaurant-search/restaurant-search.component';
import { RestaurantMenuComponent } from './main/restaurant-menu/restaurant-menu.component';
import { RestaurantDetailsComponent } from './main/restaurant-details/restaurant-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'explore',
    component: MainComponent,
    children: [
      { path: 'restaurant-list', component: RestaurantSearchComponent },

      {
        path: 'restaurant-details',
        component: RestaurantDetailsComponent,
        children: [
          { path: 'restaurant-menu', component: RestaurantMenuComponent },
          { path: '', redirectTo: 'restaurant-menu', pathMatch: 'full' },
        ],
      },
      { path: '', redirectTo: 'restaurant-list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

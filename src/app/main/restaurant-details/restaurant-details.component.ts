import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {
  constructor(private router:Router){}
  isMenuTab=true;
  menuTab(){
    this.router.navigateByUrl("explore/restaurant-details/restaurant-menu");
  }
}

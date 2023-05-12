import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestDetailsService } from 'src/app/services/rest-details.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  constructor(
    private router: Router,

    private restDetails: RestDetailsService
  ) {}
  details: any;
  ngOnInit(): void {
    this.details = this.restDetails.restaurantDetails;
    sessionStorage.setItem('restId',String(this.restDetails.restaurantDetails.id));
   
  }
  isMenuTab = true;
  menuTab() {
    this.router.navigateByUrl('explore/restaurant-details/restaurant-menu');
  }
}

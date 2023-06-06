import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantMenu } from 'src/app/models/restaurant-list';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  foodType: any;
  city: any;
  restId: any;
  isLoading = false;
  restMenu!: RestaurantMenu
  constructor(
    private router: Router,
    private restService: RestaurantService,
  
  ) {

  }

  details: any;
  ngOnInit(): void {

    this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
    this.restId = Number(sessionStorage.getItem('restId'));
    this.restService.getRestaurantMenu(this.restId).subscribe({
      next: (response) => {


        // this.isLoading = false;

        this.details = response['menu']['restaurant']

        this.restMenu = response['menu']['data'];

      },
      error: (e) => alert(e.error.message),
      complete: () => { },
    });
  }
  isMenuTab = true;
  menuTab() {
    this.router.navigateByUrl('explore/restaurant-details/restaurant-menu');
  }
}

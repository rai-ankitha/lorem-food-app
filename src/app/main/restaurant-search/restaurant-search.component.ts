import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Restaurant } from 'src/app/models/restaurant-list';
import { RestDetailsService } from 'src/app/services/rest-details.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
})
export class RestaurantSearchComponent implements OnInit {
  radioOpenForm: FormGroup;
  restList: Restaurant[] = [];
  city: any;
  foodType: any;
  isLoading = true;
  constructor(
    fb: FormBuilder,
    private router: Router,
    private restService: RestaurantService,
    private restDetails: RestDetailsService
  ) {
    this.radioOpenForm = fb.group({
      openNow: ['', Validators.required],
      time: ['', Validators.required],
      maxCost: ['', Validators.required],
      minCost: ['', Validators.required],
    });

  }
  ngOnInit(): void {
    if (
      sessionStorage.getItem('searchedRestOrType') &&
      sessionStorage.getItem('searchedLocation')
    ) {
      this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
      this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
      this.fromSearch();
    }
  }
  fromSearch() {

    this.restService
      .getRestaurantList(this.foodType, this.city, 'karnataka', 'india')
      .subscribe({
        next: (value) => {
         
          this.restList = value['data'];
          this.isLoading = false;
        },
        error: (e) => alert(e.error.message),
        complete: () => { },
      });
  }

  goToRestaurant(restId: number) {
    sessionStorage.setItem('restId', String(restId));
    for (let restaurant of this.restList) {
      if (restaurant.id === restId) {
        this.restDetails.saveRestDetails(restaurant.id,
          restaurant.name,
          restaurant.food_types,
          restaurant.rating,
          restaurant.deliveryTimeInMins,
          restaurant.min_order_cost,
          restaurant.openTime,
          restaurant.closeTime,
        );

        // this.restService.setData(restaurant)
      }

    }
    this.router.navigateByUrl('explore/restaurant-details');
  }
}

import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant-list';

@Injectable({
  providedIn: 'root',
})
export class RestDetailsService {
  constructor() {}
  restaurantDetails: Restaurant={
    id: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    rating: 0,
    status: '',
    avg_meal_cost: 0,
    min_order_cost: 0,
    deliveryTimeInMins: 0,
    food_types: '',
    openTime: '',
    closeTime: '',
    image: '',
    breakfastAvailable: false
  };
  saveRestDetails(
    id: any,
    name: any,
    food_type: any,
    rating: any,
    distance: any,
    min_cost: any,
    open_time: any,
    close_time: any
  ) {
    this.restaurantDetails!.id = id;
    this.restaurantDetails!.name = name;

    this.restaurantDetails!.food_types = food_type;
    this.restaurantDetails!.rating = rating;
    this.restaurantDetails!.deliveryTimeInMins = distance;
    this.restaurantDetails!.min_order_cost = min_cost;
    this.restaurantDetails!.openTime = open_time;
    this.restaurantDetails!.closeTime = close_time;
  }
}

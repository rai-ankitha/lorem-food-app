import { Injectable } from '@angular/core';
import { RestaurantMenu } from '../models/restaurant-list';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {
myOrderList:RestaurantMenu[]=[];
  constructor() { }
  myOrderDetails:RestaurantMenu={
    id: '',
    name: '',
    price: 0,
    dishType: '',
    rating: 0,
    description: '',
    veg: false,
    breakfast: false,
    image: ''
  }
  saveMyOrderDetails(
    id: any,
    name: any,
    price: any,
    dishType: any,
    rating: any,
    description: any,
    veg: any,
    breakfast: any,
    image:any
  ) {
    this.myOrderDetails!.id = id;
    this.myOrderDetails!.name = name;

    this.myOrderDetails!.price = price;
    this.myOrderDetails!.rating = rating;
    this.myOrderDetails!.dishType = dishType;
    this.myOrderDetails!.rating = rating;
    this.myOrderDetails!.description = description;
    this.myOrderDetails!.veg = veg;
    this.myOrderDetails!.breakfast = breakfast;
    this.myOrderDetails!.image = image;
    this.myOrderList.push(this.myOrderDetails);
  }
}

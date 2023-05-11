import { Component } from '@angular/core';
import { RestaurantDetails } from 'src/app/models/restaurant-list';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css'],
})
export class RestaurantMenuComponent {
  items: RestaurantDetails[] = [];
  constructor() {
    this.items = [
      {
        foodName: 'Chili Cheese Meal',
        foodCost: 27.0,
        isBestSeller: true,
        status: 'customizable',
        description:
          'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
        isVeg: true,
        isAdded:true,
      },
      {
        foodName: 'Chili Cheese Meal',
        foodCost: 27.0,
        isBestSeller: true,
        status: 'customizable',
        description:
          'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
        isVeg: true,
        isAdded:true,
      },
      {
        foodName: 'Chili Cheese Meal',
        foodCost: 27.0,
        isBestSeller: true,
        status: 'customizable',
        description:
          'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
        isVeg: true,
        isAdded:true,
      },
      {
        foodName: 'Chili Cheese Meal',
        foodCost: 27.0,
        isBestSeller: true,
        status: 'customizable',
        description:
          'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
        isVeg: true,
        isAdded:true,
      },
      {
        foodName: 'Chili Cheese Meal',
        foodCost: 27.0,
        isBestSeller: true,
        status: 'customizable',
        description:
          'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
        isVeg: true,
        isAdded:true,
      },
      {
        foodName: 'Chili Cheese Meal',
        foodCost: 27.0,
        isBestSeller: false,
        status: 'customizable',
        description:
          'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
        isVeg: true,
        isAdded:false,
      },
    ];
  }
  isAdded = true;
}

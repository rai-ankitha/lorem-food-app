import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent {
  items: {}[];
  constructor(){
    this.items=[{},{},{},{},{},{}];
  }
  isAdded=true;
}

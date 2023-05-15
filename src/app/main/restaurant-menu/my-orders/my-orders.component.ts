import { Component, OnInit } from '@angular/core';
import { RestaurantMenu } from 'src/app/models/restaurant-list';
import { CartDetailsService } from 'src/app/services/cart-details.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  cartArray:RestaurantMenu[]=[];
  constructor(private cartDetails:CartDetailsService){}
  ngOnInit(): void {
  
  }
  displaycart(){
    this.cartArray=this.cartDetails.myOrderList;
    // console.log(`Cart array is ${this.cartArray}`)
  }
}

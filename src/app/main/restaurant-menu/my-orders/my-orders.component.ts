import { Component, OnInit } from '@angular/core';
import { ApiResponse, RestaurantMenu } from 'src/app/models/restaurant-list';
import { CartDetailsService } from 'src/app/services/cart-details.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  cartArray:RestaurantMenu[]=[];
  isLoading=true;
  constructor(private cartDetails:CartDetailsService,private cartService:CartService){}
  ngOnInit(): void {
  
  }
  displaycart(){
    
    this.cartArray =this.cartDetails.myOrderList;
    // console.log(`Cart array is ${this.cartArray}`)
  }
  isCartEmpty=false;
  clearCart(){
    this.cartService.deleteEntireCart().subscribe({
      next: (response: ApiResponse) => {
        console.log(response.message);
        this.isCartEmpty=true;
        this.cartDetails.deleteAll();
      }
      ,
        error: (e) => {
          console.log(e)
          // alert(e.error.message);
        },
    })
  }
}

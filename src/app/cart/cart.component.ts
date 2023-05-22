import { Component, OnInit } from '@angular/core';
import { CartDetailsService } from '../services/cart-details.service';
import { CartService } from '../services/cart.service';
import { ApiResponse } from '../models/restaurant-list';
import { OrderDetailsService } from '../services/order-details.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  foodType: any;
  city: any;

  cartList: any;
  isLoading = true;
  isCartEmpty: any;
  isIndividualCart = false;
  restName: any;
  totalPrice = 0;
  constructor(private cartDetails: CartDetailsService, private cartService: CartService,private oderDetails:OrderDetailsService) { }
  ngOnInit(): void {
    this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
    // this.restId = Number(sessionStorage.getItem('restId'));
    this.cartDetails.getOrderDetails();
    this.cartDetails.orderDetailsData.subscribe({
      next: (res: any) => {
        console.log(res);
        this.cartList = res["data"]
        this.isLoading = false;
        if (this.cartList.length == 0) {
          this.isCartEmpty = true;
        }
        else {
          this.isCartEmpty = false;

        }
      }
    })

  }

  priceCalculation(data: any) {
    this.totalPrice = 0;
    for (let element of data) {
      this.totalPrice = this.totalPrice + (element['quantity'] * element['menuItem']['price']);
    }
  }

  removeIndividualCart(restId:any){
    this.cartService.deleteEntireCart(restId).subscribe({
      next: (response: ApiResponse) => {
        console.log(response.message);
        
        // this.cartDetails.restOrderData.next([])
        this.cartDetails.getOrderDetails();
        // this.cartList.splice()
      }
      ,
      error: (e) => {
        console.log(e)
        // alert(e.error.message);
      },
      complete() {
       
      },
    })
  }
  goToIndividualCart(restId: any, restName: any,restAddress:any,cartId:any) {
    this.restName = restName
    sessionStorage.setItem('restId', String(restId));
this.oderDetails.saveOrderDetails(restName,restAddress,cartId,this.totalPrice);
console.log(this.oderDetails.cartNo);
console.log(this.oderDetails.restName);
console.log(this.oderDetails.restLocation);
    this.isIndividualCart = true;
  }

}

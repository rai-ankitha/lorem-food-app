import { Component, Input, OnInit } from '@angular/core';
import { CartDetailsService } from '../services/cart-details.service';
import { CartService } from '../services/cart.service';
import { ApiResponse } from '../models/restaurant-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-cart',
  templateUrl: './individual-cart.component.html',
  styleUrls: ['./individual-cart.component.css']
})
export class IndividualCartComponent implements OnInit {
  foodType: any;
  city: any;
  cartArray: any;
  isLoading = true;
  restId: any;
  restData: any;
  cartNumber: any;
  isBack=false;
  isNext=false;
  constructor(private cartDetails: CartDetailsService, private cartService: CartService,private router:Router) { }
  ngOnInit(): void {
    this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
    this.restId = Number(sessionStorage.getItem('restId'));
    this.cartDetails.getRestOrder(this.restId);
    this.cartDetails.restOrderData.subscribe({
      next: (res: any) => {
        console.log(res);
        this.cartArray = res["menu"]["data"];
        this.restData = res['menu']['restaurant'];
        this.cartNumber = res['menu']['cartId'];
        this.isLoading = false;

      }
    })
  }

  increment(id: any) {
    console.log('increment');

    this.cartService.addToCart(id).subscribe({
      next: (response: ApiResponse) => {
        console.log(response);
        this.cartDetails.getRestOrder(this.restId);

      },
      error: (e) => {
        console.log(e)

      },
      complete: () => {


      },
    });
  }

  decrement(data: any, index: number) {
    if (data["quantity"] > 1) {
      this.cartService.deleteCartItem(data['menuItem']['id']).subscribe({
        next: (response: ApiResponse) => {
          console.log(response);
          this.cartDetails.getRestOrder(this.restId);

        },
        error: (e) => {
          console.log(e)

        },
        complete: () => {


        },
      });
    }
    else {
      console.log('else part');

      this.cartService.deleteCartItem(data['menuItem']['id']).subscribe({
        next: (response: ApiResponse) => {
          console.log(response);
          this.cartDetails.getRestOrder(this.restId);

        },
        error: (e) => {
          console.log(e)

        },
        complete: () => {

          // this.cartArray.splice(index,1);
        },
      });
    }

  }

  goToMyCart(){
    this.isBack=true;
  }
  chooseAddress(){
this.isNext=true;
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiResponse, RestaurantMenu } from 'src/app/models/restaurant-list';
import { CartDetailsService } from 'src/app/services/cart-details.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  cartArray: any;
  isLoading = true;
  isCartEmpty: any;
  cartNumber:any;
  totalCost=0;
  constructor(private cartDetails: CartDetailsService, private cartService: CartService) { }
  restId: any;

  ngOnInit(): void {
    this.restId = Number(sessionStorage.getItem('restId'));
    this.cartDetails.getRestOrder(this.restId);
    this.cartDetails.restOrderData.subscribe({
      next: (res: any) => {
        console.log(res);
        this.cartArray = res["menu"]["data"];
        this.cartNumber=res['menu']['cartId'];
        this.isLoading = false;
        if (this.cartArray.length == 0) {
          this.isCartEmpty = true;
        }
        else {
          this.isCartEmpty = false;
         this.priceCalculation();
        }
      }
    })
  }
  priceCalculation(){
    this.totalCost = 0
for(let element of this.cartArray){
this.totalCost=this.totalCost+(element['quantity']*element['menuItem']['price']);
}
  }
  displaycart() {

    // this.cartArray =this.cartDetails.myOrderList;
    // console.log(`Cart array is ${this.cartArray}`)
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

        this.priceCalculation();
      },
    });
  }

  decrement(data: any, index:number) {
    if(data["quantity"]>1){
      this.cartService.deleteCartItem(data['menuItem']['id']).subscribe({
        next: (response: ApiResponse) => {
          console.log(response);
          this.cartDetails.getRestOrder(this.restId);
  
        },
        error: (e) => {
          console.log(e)
  
        },
        complete: () => {
          this.priceCalculation();
  
        },
      });
    }
    else{
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
          this.priceCalculation();
  // this.cartArray.splice(index,1);
        },
      });
    }
   
  }
  clearCart() {
    this.cartService.deleteEntireCart(this.restId).subscribe({
      next: (response: ApiResponse) => {
        console.log(response.message);
        this.isCartEmpty = true;
       
        // this.cartDetails.restOrderData.next([])
        this.cartDetails.getRestOrder(this.restId);
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
}

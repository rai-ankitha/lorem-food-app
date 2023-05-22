import { Component, Input, OnInit } from '@angular/core';
import { CartDetailsService } from '../services/cart-details.service';
import { CartService } from '../services/cart.service';
import { ApiResponse } from '../models/restaurant-list';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleComponent } from '../schedule/schedule.component';

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
  isCartEmpty: any;
  constructor(private cartDetails: CartDetailsService, private cartService: CartService,private router:Router, private dialogRef:MatDialog) { }
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
        if (this.cartArray.length == 0) {
          this.isCartEmpty = true;
        }
        else {
          this.isCartEmpty = false;

        }
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

          this.cartArray.splice(index,1);

        },
      });
    }

  }
  removeItem(id:any,index:any){
    this.cartService.removeCartItem(id).subscribe({
      next: (response: ApiResponse) => {
        console.log(response);
        this.cartDetails.getRestOrder(this.restId);

      },
      error: (e) => {
        console.log(e)

      },
      complete: () => {
        this.cartArray.splice(index,1);
      },
    });
  }

  goToMyCart(){
    this.isBack=true;
  }
  chooseAddress(){
    if(JSON.parse(sessionStorage.getItem('date')as any)&&JSON.parse(sessionStorage.getItem('time')as any)){
      this.isNext=true;
      
    }
    else{
      alert('Please Schedule date and time before choosing address')
      this.dialogRef.open(ScheduleComponent);
    }

  }
}

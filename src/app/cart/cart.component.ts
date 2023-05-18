import { Component, OnInit } from '@angular/core';
import { CartDetailsService } from '../services/cart-details.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  foodType:any;
  city:any;
  iter:any;
  cartList:any;
  isLoading=true;
  isCartEmpty:any;
  constructor(private cartDetails:CartDetailsService){}
  ngOnInit(): void {
    this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
    // this.restId = Number(sessionStorage.getItem('restId'));
    this.cartDetails.getOrderDetails();
  this.cartDetails.orderDetailsData.subscribe({
    next:(res:any)=>{
      console.log(res);
      this.cartList=res["data"]
  this.isLoading=false;
      if(this.cartList.length==0){
          this.isCartEmpty=true;
      }
      else{
        this.isCartEmpty=false;
      }
    }
  })
    this.iter=[{},{},{},{},{},{},{},{},{}]
  }

}

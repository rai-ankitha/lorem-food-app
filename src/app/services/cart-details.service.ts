import { DoCheck, Injectable } from '@angular/core';
import { RestaurantMenu } from '../models/restaurant-list';
import { CartService } from './cart.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {
myOrderList:RestaurantMenu[]=[];
private orderDetails: RestaurantMenu | null = null;
orderDetailsData = new Subject<RestaurantMenu>();
  constructor(private cartService:CartService) { }
 
getOrderDetails(){
  
    return this.cartService.getOrderDetails().subscribe({
      next:(value:any)=>{
        this.orderDetails=value;
        this.orderDetailsData.next(value);
      }
    })
  
}

  myOrderDetails:RestaurantMenu={
    id: '',
    name: '',
    price: 0,
    dishType: '',
    rating: 0,
    description: '',
    veg: false,
    breakfast: false,
    image: '',
    isAdded:false
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
    image:any,
    isAdded:any
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
    this.myOrderDetails!.isAdded=isAdded;
    console.log(`cart details ${this.myOrderDetails.name}`)
    // var itemCopy = angular.copy(    this.myOrderDetails
    //   );
    // this.myOrderList.push(itemCopy);
    // this.myOrderList.splice(this.myOrderList.length,0,this.myOrderDetails);
   const temp = {...this.myOrderDetails};
    this.myOrderList.push(temp);
    for(let item of this.myOrderList){
      console.log(`Pushed cart ${item.name}`)
    }
  
  }
  deleteAll(){
    this.myOrderList=[];
  }
  
}

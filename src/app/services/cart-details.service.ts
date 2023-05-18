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

private restOrder: RestaurantMenu | null = null;
restOrderData = new Subject<RestaurantMenu[]>();
  constructor(private cartService:CartService) { }
 
getOrderDetails(){
  
    this.cartService.getOrderDetails().subscribe({
      next:(value:any)=>{
        console.log(`from data services ${value}`);
        
        this.orderDetails=value;
        
        this.orderDetailsData.next(value);
      },
      error:(e)=>{
      console.log(e);
      
      }
    })
  
}

getRestOrder(restId:any){
  
  this.cartService.getRestaurantOrder(restId).subscribe({
    next:(value:any)=>{
      console.log(`from rest services ${value}`);
      
      this.restOrder=value["menu"]["data"];
      this.restOrderData.next(value["menu"]["data"]);
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

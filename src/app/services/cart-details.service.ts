import { DoCheck, Injectable } from '@angular/core';
import { RestaurantMenu } from '../models/restaurant-list';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService implements DoCheck {
myOrderList:RestaurantMenu[]=[];

  constructor() { }
  ngDoCheck(): void {
    console.log(this.myOrderList);
    
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
    image: ''
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
    image:any
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
}

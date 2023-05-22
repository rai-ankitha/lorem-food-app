import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  restName:string="";
restLocation:string="";
cartNo:number=0;
totalPrice:number=0;
city:string='';
area:string='';
address:string='';
addressType:string='home';
userName:string='';
contactNo:string='';
deliveryType:string='';
deliveryInst:string='';
paymentType:string='';
  constructor() { }
saveOrderDetails(restName:any,restLocation:any,cartNo:any,totalPrice:any){
this.restName=restName;
this.restLocation=restLocation;
this.cartNo=cartNo;
this.totalPrice=totalPrice;
  }

  saveOrderAddress(city:any,area:any,address:any,addressType:any){
this.city=city;
this.area=area;
this.address=address;
this.addressType=addressType;
  }
}

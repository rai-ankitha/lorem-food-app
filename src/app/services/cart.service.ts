import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/restaurant-list';
import { UserService } from '../user.service';
import { RestDetailsService } from './rest-details.service';
import { OrderDetailsService } from './order-details.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private restDetails: RestDetailsService,private orderDetails:OrderDetailsService) { }

  getOrderDetails() {
    
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
   
    let email = JSON.parse(sessionStorage.getItem('email') as any)

    const options = {
      headers: headers_object,
      params:new HttpParams().set('emailId',email)}
    return this.http.get(environment.url + '/api/cart/my-cart'
      ,options);
  }

  getRestaurantOrder(restId:any) {
    
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
   
    let email = JSON.parse(sessionStorage.getItem('email') as any)

    const options = {
      headers: headers_object,
      params:new HttpParams().set('emailId',email)}
    return this.http.get(environment.url + 'api/cart/'+restId+'/my-cart'
      ,options);
  }

  addToCart(menuItemId: any) {

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    // let email = this.userService.emailId
    let email = JSON.parse(sessionStorage.getItem('email') as any)

    const body = {
      "emailId": email,
      "menuItemId": menuItemId,
    }
    console.log(body)

    return this.http.post<ApiResponse>(environment.url + 'api/cart/add-item'
      , body, { headers: headers_object });
  }
  deleteCartItem(menuItemId: any) {

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    // let email = this.userService.emailId
    let email = JSON.parse(sessionStorage.getItem('email') as any)
    const options = {
      headers: headers_object,
      body: {
        "emailId": email,
        "menuItemId": menuItemId,
      }
    }

    return this.http.delete<ApiResponse>(environment.url + 'api/cart/delete-item'
      , options);
  }
  deleteEntireCart(restId:any) {

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  
    let email = JSON.parse(sessionStorage.getItem('email') as any)
    const options = {
      headers: headers_object,
      body: {
        "emailId": email,
        "restId": restId,
      }
    }

    return this.http.delete<ApiResponse>(environment.url + 'api/cart/clear-cart'
      , options);
  }
  removeCartItem(menuItemId: any){
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    // let email = this.userService.emailId
    let email = JSON.parse(sessionStorage.getItem('email') as any)
    const options = {
      headers: headers_object,
      body: {
        "emailId": email,
        "menuItemId": menuItemId,
      }
    }

    return this.http.delete<ApiResponse>(environment.url + 'api/cart/remove-cart-item'
      , options);
  }

  postOrder(){
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let cartId = this.orderDetails.cartNo
    let email = JSON.parse(sessionStorage.getItem('email') as any)
let date=JSON.parse(sessionStorage.getItem('date') as any)
let time=JSON.parse(sessionStorage.getItem('time') as any)
let address=this.orderDetails.address
let type=this.orderDetails.addressType
let totalCost=this.orderDetails.totalPrice
let userName=this.orderDetails.userName
let mobile=this.orderDetails.contactNo
    const body = {
      "emailId": email,
      "cartId": cartId,
      "date":date,
    "time":time,
    "address":{
        "location":address,
    "isPrimary":true,
   "type":type.toUpperCase()
    },
    "cookingInstruction":"",
    "deliveryType":"DELIVER_TO_ME",
    "contactName":userName,
    "mobileNo":mobile,
    "deliveryInstruction":"",
    "paymentMode":"CASH",
    "itemCost":totalCost
    }
    console.log(body)

    return this.http.post<ApiResponse>(environment.url + 'api/order/place-order'
      , body, { headers: headers_object });
  }

}

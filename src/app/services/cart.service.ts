import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/restaurant-list';
import { UserService } from '../user.service';
import { RestDetailsService } from './rest-details.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private userService: UserService, private restDetails: RestDetailsService) { }

  addToCart(menuItemId: any) {

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let email = this.userService.emailId

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
    let email = this.userService.emailId

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
  deleteEntireCart() {

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let email = this.userService.emailId
    let restId = this.restDetails.restaurantDetails.id;
    
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
}

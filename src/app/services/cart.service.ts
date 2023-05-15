import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/restaurant-list';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,private userService:UserService) { }
  
  addToCart( menuItemId: any) {
      
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let email=this.userService.emailId

    const body = {
      "emailId": email,
      "menuItemId": menuItemId,
    }
    console.log(body)

    return this.http.post<ApiResponse>(environment.url +'api/cart/add-item'
      , body, { headers: headers_object });
  }
}

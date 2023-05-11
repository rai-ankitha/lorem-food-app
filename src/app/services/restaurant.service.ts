import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http : HttpClient) { }
  getRestaurantList(search:any,city:any,state:any,country:any){
    return this.http.get(environment.url +'api/restaurant/search?',{params:{query:search,city:city,state:state,country:country}});
  }
}

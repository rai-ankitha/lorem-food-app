import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../models/restaurant-list';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
 
  constructor(private http: HttpClient) {}
  getRestaurantList(search: any, city: any, state: any, country: any) {
    let params = new HttpParams();
    params = params.append('query', search);
    params = params.append('city', city);
    params = params.append('state', state);
    params = params.append('country', country);
    return this.http
      .get(environment.url + 'api/restaurant/search', { params: params })
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error) => {
          return throwError('Something went wrong!');
        })
      );
  }
  getRestaurantMenu(id: number) {
    return this.http
      .get(environment.url + 'api/restaurant/' + id + '/menu')
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  getSearchedMenu(id: number,search:any) {
    return this.http
      .get(environment.url + 'api/restaurant/' + id + '/menu/search',{params:new HttpParams().set('query',search)})
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
  
}

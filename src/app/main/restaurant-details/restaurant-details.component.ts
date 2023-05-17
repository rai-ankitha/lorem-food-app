import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantMenu } from 'src/app/models/restaurant-list';
import { RestDetailsService } from 'src/app/services/rest-details.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit{
  foodType:any;
  city:any;
  restId: any;
  isLoading = true;
  hotelDetails!:RestaurantMenu
  constructor(
    private router: Router,
private restService:RestaurantService,
    private restDetails: RestDetailsService
  ) {
   
  }

  details: any;
  ngOnInit(): void {
    // this.details=JSON.parse(localStorage.getItem("singleResto")as any);
    // sessionStorage.setItem('restId',String(this.details.id));
 
    // this.details = this.restDetails.restaurantDetails;
    // sessionStorage.setItem('restId',String(this.restDetails.restaurantDetails.id));
    this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
    this.restId = Number(sessionStorage.getItem('restId'));
    this.restService.getRestaurantMenu(this.restId).subscribe({
      next: (response) => {
        

        this.isLoading = false;
        console.log(response['menu']['restaurant']);
      this.details=response['menu']['restaurant']
        console.log(`inside details ${this.details}`);
        
        
          this.hotelDetails=response['menu']['data'];
      
      },
      error: (e) => alert(e.error.message),
      complete: () => {},
    });
  }
  isMenuTab = true;
  menuTab() {
    this.router.navigateByUrl('explore/restaurant-details/restaurant-menu');
  }
}

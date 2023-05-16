import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, RestaurantMenu } from 'src/app/models/restaurant-list';
import { CartDetailsService } from 'src/app/services/cart-details.service';
import { CartService } from 'src/app/services/cart.service';
import { RestDetailsService } from 'src/app/services/rest-details.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css'],
})
export class RestaurantMenuComponent implements OnInit {
  isLoading = true;
  isCartLoading=true;
  isSearching = false;
  search: any;
  restId: any;
  searchedMenu: RestaurantMenu[] = [];
  menu: Map<string, RestaurantMenu[]> = new Map([
    ['SOUP', []],
    ['APPETIZER', []],
    ['MAINCOURSE', []],
    ['GRAVY', []],
    ['BEVERAGE', []],
  ]);

  isAdded = false;

  constructor(
    private router:Router,
    private restService: RestaurantService,
    private cartService: CartService,
    private cartDetails: CartDetailsService
  ) {}
  ngOnInit(): void {
    this.restId = Number(sessionStorage.getItem('restId'));
    this.restService.getRestaurantMenu(this.restId).subscribe({
      next: (response) => {
        // console.log('menu', this.menu);

        this.isLoading = false;
        console.log(response['data']);
        for (let item of response['data']) {
          console.log('item', item);
          this.menu.get(item['dishType'])?.push(item);
        }
      },
      error: (e) => alert(e.error.message),
      complete: () => {},
    });
  }

  searchMenu(e: any) {
    if (e.keyCode == 13) {
      this.restService.getSearchedMenu(this.restId, this.search).subscribe({
        next: (response) => {
          console.log(response['data']);
          this.isSearching = true;
          this.searchedMenu = response['data'];
        },
        error: (e) => {
          alert(e.error.message);

          this.search = '';
        },
        complete: () => {
          if (this.searchedMenu == null) {
            alert('search not found');
          }
        },
      });
    }
  }
addIcon(id:any){
for(let entry of this.searchedMenu){
  if(entry.id==id){
    this.isAdded=false;
  }
  else{
    this.isAdded=true;
  }
}
}
  addTocart(data: RestaurantMenu) {
    if(sessionStorage.getItem('token')){
     
      console.log(`Added to cart ${data.name}`)
      this.cartService.addToCart(data.id).subscribe({
        next: (response: ApiResponse) => {
          // alert(response.message);
          this.isCartLoading=false;
          this.isAdded= true;
          this.cartDetails.saveMyOrderDetails(
            data.id,
            data.name,
            data.price,
            data.dishType,
            data.rating,
            data.description,
            data.veg,
            data.breakfast,
            data.image
          );
        },
        error: (e) => {
          console.log(e)
          // alert(e.error.message);
        },
        complete: () => {
          // this.isAdded = false;
        },
      });
    }
    else{
      alert("Please Signin inorder to place order");
      this.router.navigateByUrl("/home")
    }

    // sessionStorage.setItem('cartArray', JSON.stringify(data));
  }
}

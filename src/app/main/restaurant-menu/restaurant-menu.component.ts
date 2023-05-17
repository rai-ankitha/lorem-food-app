import { Component, Input, OnInit } from '@angular/core';
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
  @Input() restMenuList:any;
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



  constructor(
    private router:Router,
    private restService: RestaurantService,
    private cartService: CartService,
    private cartDetails: CartDetailsService
  ) {}
  ngOnInit(): void {
    this.restId = Number(sessionStorage.getItem('restId'));
    for (let item of this.restMenuList) {
            console.log('item', item);
            this.menu.get(item['dishType'])?.push(item);
            this.isLoading=false;
          }

    // this.restId = Number(sessionStorage.getItem('restId'));
    // this.restService.getRestaurantMenu(this.restId).subscribe({
    //   next: (response) => {
    //     // console.log('menu', this.menu);

    //     this.isLoading = false;
    //     console.log(response['menu']['restaurant']);
      
        
    //     for (let item of response['menu']['data']) {
    //       console.log('item', item);
    //       this.menu.get(item['dishType'])?.push(item);
    //     }
    //   },
    //   error: (e) => alert(e.error.message),
    //   complete: () => {},
    // });
  }

  searchMenu(e: any) {
    if (e.keyCode == 13) {
      this.restService.getSearchedMenu(this.restId, this.search).subscribe({
        next: (response) => {
          console.log(response['data']);
          this.isSearching = true;
          this.searchedMenu = response['data'];
       for(let i of this.searchedMenu){
        for(let j of this.cartDetails.myOrderList){
         i.isAdded=j.isAdded
        }
  
       }
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

  addTocart(data: RestaurantMenu,index:any) {
    if(sessionStorage.getItem('token')){
     
      console.log(`Added to cart ${data.name}`)
      this.cartService.addToCart(data.id).subscribe({
        next: (response: ApiResponse) => {
          console.log(response);
          
          data.isAdded=true;
          // alert(response.message);
          this.isCartLoading=false;
  
          this.cartDetails.saveMyOrderDetails(
            data.id,
            data.name,
            data.price,
            data.dishType,
            data.rating,
            data.description,
            data.veg,
            data.breakfast,
            data.image,
            data.isAdded
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

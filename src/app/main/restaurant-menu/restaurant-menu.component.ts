import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, RestaurantMenu } from 'src/app/models/restaurant-list';
import { CartDetailsService } from 'src/app/services/cart-details.service';
import { CartService } from 'src/app/services/cart.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css'],
})
export class RestaurantMenuComponent implements OnInit {
  @Input() restMenuList: any;
  isLoading = true;
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
  cartArray: any;


  constructor(
    private router: Router,
    private restService: RestaurantService,
    private cartService: CartService,
    private cartDetails: CartDetailsService
  ) { }
  ngOnInit(): void {
    this.restId = Number(sessionStorage.getItem('restId'));

    for (let item of this.restMenuList) {
      console.log('item', item);
      this.menu.get(item['dishType'])?.push(item);
    }

    this.cartDetails.getRestOrder(this.restId);
    this.cartDetails.restOrderData.subscribe({
      next: (res: any) => {
        console.log(res);
        this.cartArray = res;
        console.log('Emitted');

        console.log(this.cartArray);
        for (let i of this.restMenuList) {
        i.isAdded=false;
          for (let j of this.cartArray) {
         
           
            if (i.id == j["menuItem"]["id"]) {
              i.isAdded = true;

              console.log("true");
            }
          }
    
        }
        this.isLoading = false;
      },
      complete() {
        
      },
    });

   


  }

  searchMenu(e: any) {
    if (e.keyCode == 13) {
      
      this.restService.getSearchedMenu(this.restId, this.search).subscribe({
        next: (response) => {
          console.log(response['data']);
          this.isSearching = true;
          this.searchedMenu = response['data'];
        
          this.cartDetails.getRestOrder(this.restId);
    this.cartDetails.restOrderData.subscribe({
      next: (res: any) => {
        
        this.cartArray = res;
        
        for (let i of this.searchedMenu) {
          i.isAdded=false;
          for (let j of this.cartArray) {
            if (i.id == j["menuItem"]["id"]) {
              i.isAdded = true
            }
          
          }
    
        }
        this.isLoading = false;
      },
      complete() {
        
      },
    });


        
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

  addTocart(data: RestaurantMenu, index: any) {
    if (sessionStorage.getItem('token')) {

      this.cartService.addToCart(data.id).subscribe({
        next: (response: ApiResponse) => {
          
          this.cartDetails.getRestOrder(this.restId);
          
        },
        error: (e) => {
          console.log(e)
    
        },
        complete: () => {

         
        },
      });
    }
    else {
      alert("Please Signin inorder to place order");
      this.router.navigateByUrl("/home")
    }

  }
}

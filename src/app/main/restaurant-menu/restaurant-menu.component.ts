import { Component, OnInit } from '@angular/core';
import { RestaurantMenu } from 'src/app/models/restaurant-list';
import { RestDetailsService } from 'src/app/services/rest-details.service';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css'],
})
export class RestaurantMenuComponent implements OnInit{
  isLoading=true;
  isSearching=false;
  search:any;
  restId:any;
  searchedMenu:RestaurantMenu[]=[];
  menu:Map<string,RestaurantMenu[]>=new Map([
    ['SOUP', []],
    ['APPETIZER', []],
    ['MAINCOURSE', []],
    ['GRAVY', []],
    ['BEVERAGE', []],
  ]);
  
  isAdded = false;

  constructor(private restService: RestaurantService,) {
    

    }
  ngOnInit(): void {
    this.restId=Number(sessionStorage.getItem('restId'));
    this.restService
    .getRestaurantDetails(this.restId)
    .subscribe({
      next: (response) => {
        // console.log('menu', this.menu);
        
        this.isLoading=false
        console.log(response["data"]);
        for(let item of response["data"]){
          console.log('item', item);
        this.menu.get(item["dishType"])?.push(item)
        }
        
      },
      error: (e) => alert(e.error.message),
      complete: () => {},
    });
  }
  
  searchMenu(e:any) {
   
    
    if(e.keyCode == 13){
      this.restService.getSearchedMenu(this.restId, this.search).subscribe({
        next: (response) => {  console.log(response["data"]);
        this.isSearching=true;
        this.searchedMenu=response["data"]
        },
        error: (e) => {
          alert(e.error.message);
        
          this.search = ''
        },
        complete: () => {
          console.log()
  
        }
      });
  
    }



  }
  }
 


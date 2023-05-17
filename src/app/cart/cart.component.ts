import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  foodType:any;
  city:any;
  ngOnInit(): void {
    this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
  }

}

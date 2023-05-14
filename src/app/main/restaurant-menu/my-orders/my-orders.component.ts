import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  cartArray:any;
  ngOnInit(): void {
  
  }
  displaycart(){
    this.cartArray=JSON.parse(sessionStorage.getItem('cartArray') as any)
    console.log(`Cart array is ${this.cartArray}`)
  }
}

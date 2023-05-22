import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  isBack = false;
  isNext = false;
  foodType: any;
  city: any;
  restName: any;
  restLocation: any;
  mydate: any;
  time: any;
  address: any;
  paymentType = 'cash';
  orderId:any;
  isSuccess=false;
  constructor(private orderDetails: OrderDetailsService, private cartService: CartService) {

  }
  ngOnInit(): void {
    this.foodType = JSON.parse(
      sessionStorage.getItem('searchedRestOrType') as any
    );
    this.city = JSON.parse(sessionStorage.getItem('searchedLocation') as any);
    this.restName = this.orderDetails.restName;
    this.restLocation = this.orderDetails.restLocation;
    this.mydate = JSON.parse(sessionStorage.getItem('date') as any);
    this.time = JSON.parse(sessionStorage.getItem('time') as any);
    this.address = this.orderDetails.address
    console.log(this.restName);

  }
  goToChooseAddress() {
    this.isBack = true;
  }

  deliveryIn(e: any) {
    this.paymentType = e.target.value;

  }


  payNow() {
    this.orderDetails.paymentType = this.paymentType.toUpperCase();
    this.cartService.postOrder().subscribe({
      next: (res: any) => {
        
        this.orderId=res['orderId']
        console.log(this.orderId)
        this.isSuccess=true;
      },
      complete(){

      }
    })

  }
}

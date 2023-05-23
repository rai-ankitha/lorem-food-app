import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit{
 
  // @Input() orderId: any;
  foodType:any;
  city:any;
  orderId:any
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.foodType = JSON.parse(
      sessionStorage.getItem('searchedRestOrType') as any
    );
    this.city = JSON.parse(sessionStorage.getItem('searchedLocation') as any);
    this.route.paramMap.subscribe((params) => {
      this.orderId = params.get('orderId');
    });
  }
  
}

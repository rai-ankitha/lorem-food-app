import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent {
  radioOpenForm: FormGroup;
  items: {}[];
  goToRestaurant(){
    this.router.navigateByUrl("explore/restaurant-details");
  }
  constructor(fb: FormBuilder,private router: Router) {
    
    this.radioOpenForm = fb.group({
      openNow: ['', Validators.required],
      time: ['', Validators.required],
     maxCost: ['', Validators.required],
     minCost:['', Validators.required],

    });
  
    this.items=[{},{},{},{},{},{}];
    
  }
  
}

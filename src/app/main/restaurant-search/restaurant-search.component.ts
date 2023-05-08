import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent {
  radioOpenForm: FormGroup;
  items: {}[];
  constructor(fb: FormBuilder) {
    
    this.radioOpenForm = fb.group({
      openNow: ['', Validators.required],
      time: ['', Validators.required],
     maxCost: ['', Validators.required],
     minCost:['', Validators.required],

    });
  
    this.items=[{},{},{},{},{},{}];
   
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  addressValue: any
  addressForm! : FormGroup;

  disable=true;
  
  addressDetails: any;
  addressDetails1: any;
  addressDetails0: any;
 ;

  constructor(private fb: FormBuilder,) { }

  
  ngOnInit(): void {
    this.addressForm = this.fb.group({
      city: this.fb.control(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)]),
      area : this.fb.control(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)]),
      address : this.fb.control(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)]),
      label : this.fb.control(null, [Validators.required])
    })

    

    
    }
  



onSubmit(){  
  
  
  
}

}

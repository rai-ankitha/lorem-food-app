import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderDetailsService } from '../services/order-details.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addressValue: any;
  addressForm!: FormGroup;
  location: any;
  disable = true;

  addressDetails: any;
  addressDetails1: any;
  addressDetails0: any;
  constructor(private fb: FormBuilder,private orderDetails:OrderDetailsService,private dialogRef:MatDialogRef<AddressComponent>) {}

  ngOnInit(): void {
    this.location = JSON.parse(
      sessionStorage.getItem('searchedLocation') as any
    );
    this.addressForm = this.fb.group({
      city: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[A-Z a-z]+$/),
      ]),
      area: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[A-Z a-z]+$/),
      ]),
      address: this.fb.control(null, [
        Validators.required,
        Validators.pattern(/^[A-Z a-z]+$/),
      ]),
      label: this.fb.control(null, [Validators.required]),
    });
  }

  onSubmit() {
    if(this.addressForm.valid){
this.orderDetails.saveOrderAddress(this.addressForm.get('city')!.value,this.addressForm.get('area')!.value,this.addressForm.get('address')!.value,this.addressForm.get('label')!.value,)
console.log(this.orderDetails.address);
this.dialogRef.close();
    }
  }
}

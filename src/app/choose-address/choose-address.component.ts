import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-choose-address',
  templateUrl: './choose-address.component.html',
  styleUrls: ['./choose-address.component.css']
})
export class ChooseAddressComponent implements OnInit{
  detailForm!:FormGroup;
  foodType: any;
  city: any;
  notFocused=false;
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialog
  ) {
    this.createForm();
   }
  ngOnInit(): void {
   this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
  }
 
  createForm() {
    this.detailForm = this.fb.group({
      name:[null, Validators.required],
     
      mobileNumber:['' ,[Validators.pattern("[0-9 ]{10}")]],
      
    });
  }
  goToIndividualCart(){

  }
  choosePayment(){

  }
  update(){

  }
  delAddress(){

  }
  addAddress(){
    this.dialogRef.open(AddressComponent);
  }
  deliveryIn(e: any) {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';
import { OrderDetailsService } from '../services/order-details.service';

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
  isBack=false;
  isNext=false;
  showAddress=false;
  address:any;
  addressType:any;
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialog,private orderDetails:OrderDetailsService
  ) {
    this.createForm();
   }
  ngOnInit(): void {
   this.foodType = JSON.parse(sessionStorage.getItem("searchedRestOrType") as any);
    this.city = JSON.parse(sessionStorage.getItem("searchedLocation") as any);
    this.address=this.orderDetails.address
    this.addressType=this.orderDetails.addressType
  }
 
  createForm() {
    this.detailForm = this.fb.group({
      name:[null, Validators.required],
     
      phone:['' ,[Validators.pattern("[0-9 ]{10}")]],
      
    });
  }
  goToIndividualCart(){
this.isBack=true;
  }
  choosePayment(){
   if(this.detailForm.valid){
    this.orderDetails.userName=this.detailForm.get('name')!.value
    this.orderDetails.contactNo=this.detailForm.get('phone')!.value
    this.isNext=true
   }

  }
  update(){

  }
  delAddress(){

  }
  addAddress(){
    this.dialogRef.open(AddressComponent);
    this.showAddress=true
  }
  deliveryIn(e: any) {
    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search:any
location:any;
constructor(){
 
}
  ngOnInit(): void {
    const searchItem=sessionStorage.getItem("searchedRestOrType")
  const locationItem=sessionStorage.getItem("searchedLocation")
  this.search=JSON.parse(searchItem!)
  this.location=JSON.parse(locationItem!)
  }
}

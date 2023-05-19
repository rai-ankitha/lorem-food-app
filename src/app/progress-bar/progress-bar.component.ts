import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit{
  images= [
    './assets/progress-bar/half-line.png',
    './assets/progress-bar/line_2.png',
    './assets/progress-bar/line_3.png'
  ]
  retain='';
  activeOrDeactiveCircle2=''
  activeOrDeactiveCircle3=''
  constructor(private router : Router) { }

  ngOnInit(): void {
     if(this.router.url == '/chooseAddress'){
      this.activeOrDeactiveCircle2 = 'active';
      this.retain = this.images[0];
      this.images[0] = this.images[1];
      this.images[2]=this.retain;
    } else if(this.router.url == '/cartPayment'){
      this.activeOrDeactiveCircle2 = 'active';
      this.activeOrDeactiveCircle3 = 'active';
      this.images[2]=this.images[1];
      this.images[0] = this.images[1];
    }

  }

}

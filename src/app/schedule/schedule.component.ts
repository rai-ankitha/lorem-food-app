import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  todayDate:any;
  time:any;
  constructor(private fb:FormBuilder, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.todayDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    var today = new Date();
    let twentyMinutesLater = new Date(today.getTime() + (30*60*1000))
    this.time = twentyMinutesLater.getHours() + ":" + twentyMinutesLater.getMinutes() ;

  }


  ScheduleDetails = this.fb.group({
    date: [, [Validators.required]],
    time: [, [Validators.required]]
  })

  schedule(){

    if(this.ScheduleDetails.invalid == false){
      sessionStorage.setItem('date',JSON.stringify(this.ScheduleDetails.get('date')?.value)as any);
      sessionStorage.setItem('time',JSON.stringify(this.ScheduleDetails.get('time')?.value)as any);

      let address = JSON.parse(sessionStorage.getItem('chechOrderDetails') as any);
    address.scheduleDate = (this.ScheduleDetails.get('date')?.value) ;
    address.scheduleTime = (this.ScheduleDetails.get('time')?.value)+":00";
    sessionStorage.setItem('chechOrderDetails', JSON.stringify(address));
    sessionStorage.setItem('dateTime',"scheduled")
    }

  }
}

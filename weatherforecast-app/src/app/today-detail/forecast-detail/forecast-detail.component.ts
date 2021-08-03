import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.scss']
})
export class ForecastDetailComponent implements OnInit {
  hours
  minutes
  color:boolean

  getCurrentDate(){
    setInterval(() => {
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
    }, 1000)

    if(this.hours > 18){
     this.color = false
    }
  }


  // get(){
  //   this.hours = new Date().getHours();
  //   this.minutes = new Date().getMinutes() 
  // }
  constructor() { }

  ngOnInit(): void {
    this.getCurrentDate()
    
  }

}

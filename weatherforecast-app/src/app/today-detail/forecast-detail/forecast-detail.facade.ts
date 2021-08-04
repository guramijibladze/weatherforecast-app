import { Injectable } from '@angular/core';


@Injectable()
export class ForecastDetailFacade{
weekDay: string[] = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
month:string[] = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", 
                    "October", "November", "December" ]

    getWeekDay(x){
        return this.weekDay[x]
    }

    getMonth(m){
        return this.month[m]
    }
}
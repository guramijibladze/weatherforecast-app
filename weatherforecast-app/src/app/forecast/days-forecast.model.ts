
export interface Hourlyforecast{
    list: HourlyInfo[]
}

interface HourlyInfo{
    main: Temp,
    dt_txt: string
    weather:Weather[]
}

interface Weather{
    description:string,
    icon:string
}

interface Temp{
    temp:number
}

// isCon   
// description

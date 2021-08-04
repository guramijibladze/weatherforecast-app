// baqend model
export interface WeatherByLocation{
    dt: number,
    main: Main
    name: string,
    sys: Sys,
    weather: Weather[],
    wind: Wind,
    clouds: Clouds,
    // rain: Rain
}

interface Main{
    humidity: number,
    temp: number
}

interface Weather{
    description: string,
}

interface Sys{
    country: string,
}

interface Wind{
    deg: number,
    speed: number
}

interface Clouds {
    all: number
}

// interface Rain{
//     '1h': string
// }



// front model
export interface WeatherByLocationView{
    date: number,
    main: Main,
    citiName: string,
    countryIndex: Sys,
    weather: Weather[],
    wind: Wind,
    clouds: Clouds,
    // rain: Rain
}
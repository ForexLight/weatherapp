export type Weather = {
    cod: number,
    cord: {
      lon: number,
      lat: number
    },
    main: {
        temp: number,
        humidity:number,
        pressure: number,
        feels_like: number
    },
    weather: [{
        main: string
    }],
    wind: {
        speed: number,
        deg: number
    }
    name: string
}

type dayWeather = {
    dt: number,
    temp: {
        min: number,
        max: number
    },
    weather: [{
        main: string
    }]
}


export type weekWeather = {
    daily: any
}


export type Weather = {
    cod: number,
    coord: Cord,
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

export type dayWeather = {
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
    daily: dayWeather[]
}

export type Cord = {
    lon: number,
    lat: number
}


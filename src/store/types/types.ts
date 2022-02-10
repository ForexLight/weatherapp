export type Weather = {
    cod: number,
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
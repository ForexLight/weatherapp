import  { AxiosResponse} from "axios";
import {Weather, weekWeather} from "../store/types/types";
import api from "../axios";

interface Cords {
    lon: number,
    lat: number
}

export class WeatherService {
    static getCurrentWeather (city:string): Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(
            `/weather?q=${city}`)
    }

    static getWeekWeather (cord:Cords): Promise<AxiosResponse<weekWeather>>{

        return api.get<weekWeather>(
            `onecall?lat=${cord.lat}&lon=${cord.lon}`
        )

    }
}
import  { AxiosResponse} from "axios";
import {Weather} from "../store/types/types";
import api from "../axios";

interface Coords {
    lon: number,
    lat: number
}

export class WeatherService {
    static getCurrentWeather (city:string): Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(
            `/weather?q=${city}`)
    }
    // @ts-ignore
    static getWeekWeather (coord:Coords): Promise<AxiosResponse<Weather>>{


    }
}
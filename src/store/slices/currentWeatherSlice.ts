import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/types";
import { AxiosResponse} from "axios";


type Response = {
    status: number;
    message: string;
}
type CurrentWeather = {
    weather: Weather;
    isLoading: boolean;
    response: Response;
}


const initialState:CurrentWeather = {
    weather: {
        cod: 0,
        coord: {
            lon: 0,
            lat: 0
        },
        main: {
            feels_like: 0,
            pressure: 0,
            humidity: 0,
            temp: 0
        },
        weather: [{
            main: ''
        }],
        wind: {
          speed: 0,
          deg: 0
        },
        name: ''
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const currentWeatherSlice = createSlice({
    name:'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state){
            state.isLoading = true
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weather = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        }
    }
})

export default currentWeatherSlice.reducer
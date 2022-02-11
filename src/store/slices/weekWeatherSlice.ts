import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather, weekWeather} from "../types/types";
import {Axios, AxiosResponse} from "axios";
import {stat} from "fs";

type Response = {
    status: number;
    message: string;
}

type WeekWeather = {
    weather: weekWeather,
    isLoading: boolean,
    response: Response
}
const initialState:WeekWeather = {
    weather: {
        daily: [
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
            {
                dt: 0,
                temp: {
                    min: 0,
                    max: 0,
                },
                weather: [{
                    main: 'Cloudy'
                }]
            },
        ]
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}



export const weekWeatherSlice = createSlice({
    name:'week_weather',
    initialState,
    reducers: {
        fetchWeekWeather(state){
            state.isLoading = true
        },
        fetchWeekWeatherSuccess(state, action: PayloadAction<AxiosResponse<any>>) {
            state.weather = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchWeekWeatherError(state, action: PayloadAction<AxiosResponse<any>>){
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        }
    }
})

export default weekWeatherSlice.reducer
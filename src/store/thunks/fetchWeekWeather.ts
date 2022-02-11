import {AppDispatch} from "../store";
import {WeatherService} from "../../services/WeatherService";
import {weekWeatherSlice} from "../slices/weekWeatherSlice";

type weekPayload = {
    lon: number,
    lat: number
}

export const fetchWeekWeather = (payload: weekPayload) =>  async (dispatch: AppDispatch) => {
    try {
        dispatch(weekWeatherSlice.actions.fetchWeekWeather())

        const res = await WeatherService.getWeekWeather(payload)

        if(res.status === 200) {
            dispatch(weekWeatherSlice.actions.fetchWeekWeatherSuccess(res))
        } else {
            dispatch(weekWeatherSlice.actions.fetchWeekWeatherError(res))
        }
    }catch (e){
        console.log(e)
    }

}
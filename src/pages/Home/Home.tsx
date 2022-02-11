import React, {useEffect, useState} from "react"

import sl from './Home.module.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {fetchWeekWeather} from '../../store/thunks/fetchWeekWeather'
import {useSelector} from "react-redux";
import {selectCurrentWeatherData, selectWeekWeatherData} from "../../store/selectors";

interface Props {
    city:string,
    setPopup: () => void
}

export const Home = (props: Props) => {

    const {city} = props
    const [err, setErr] = useState(false)
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector(selectCurrentWeatherData)
    const {weekWeather} = useCustomSelector(selectWeekWeatherData)

    console.log(weather)
    console.log(weekWeather)

    useEffect(() => {
        dispatch(fetchCurrentWeather(city))
    }, [city])

    useEffect(() => {
        dispatch(fetchWeekWeather({lon: weather.cord.lon, lat: weather.cord.lat}))
    }, [city])

    return (
        <div className={sl.home}>
            <div className={sl.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo weather={weather}/>
            </div>
            <Days />
        </div>
    )
}
import React, {useEffect, useState} from "react"

import sl from './Home.module.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../store/selectors";

interface Props {
    city:string,
    setPopup: () => void
}

export const Home = (props: Props) => {

    const {city} = props
    const [err, setErr] = useState(false)
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector(selectCurrentWeatherData)


    console.log(weather)

    useEffect(() => {
        dispatch(fetchCurrentWeather(city))
    }, [city, dispatch])


    return (
        <div className={sl.home}>
            <div className={sl.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo weather={weather}/>
            </div>
            <Days coord={weather.coord}/>
        </div>
    )
}
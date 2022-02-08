import React, {useEffect} from "react"

import sl from './Home.module.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {useSelector} from "react-redux";
import {selectCurrentWeatherData} from "../../store/selectors";

interface Props {

}

export const Home = (props: Props) => {

    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'))
    }, [])

    return (
        <div className={sl.home}>
            <div className={sl.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo />
            </div>
            <Days />
        </div>
    )
}
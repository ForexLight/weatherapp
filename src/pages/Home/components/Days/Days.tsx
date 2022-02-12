import React, {useEffect} from "react"

import sl from './Days.module.scss'

import {dayWeather, Cord} from "../../../../store/types/types";
import {Card} from "./Card";
import {Tabs} from "./Tabs";
import {fetchWeekWeather} from "../../../../store/thunks/fetchWeekWeather";
import {useCustomDispatch, useCustomSelector} from "../../../../hooks/store";
import {selectWeekWeatherData} from "../../../../store/selectors";

interface Props {
    coord:Cord
}
export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = ({coord}: Props) => {

    const dispatch = useCustomDispatch()
    const weekWeather = useCustomSelector(selectWeekWeatherData).weather

    useEffect(() => {
        dispatch(fetchWeekWeather(coord))
    }, [coord])


    const days: dayWeather[] = weekWeather.daily.slice(0, 7)

    console.log(days)

    const daysToJsx = days.map((day: dayWeather) => <Card  day={day}/>)

    return (
        <>
            <div className={sl.days}>
                {daysToJsx}
            </div>
        </>

    )
}
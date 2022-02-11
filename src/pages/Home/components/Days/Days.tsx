import React from "react"

import sl from './Days.module.scss'

import {dayWeather, weekWeather} from "../../../../store/types/types";
import {Card} from "./Card";
import {Tabs} from "./Tabs";

interface Props {
    weekWeather:weekWeather
}
export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = ({weekWeather}: Props) => {

    const days: dayWeather[] = weekWeather.daily.slice(0, 7)

    console.log(days)

    const daysToJsx = days.map((day: dayWeather) => <Card  day={day}/>)

    return (
        <>
            <Tabs />
            <div className={sl.days}>
                {daysToJsx}
            </div>
        </>

    )
}
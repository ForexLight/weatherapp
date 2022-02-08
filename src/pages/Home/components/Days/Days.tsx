import React from "react"

import sl from './Days.module.scss'

import {Card} from "./Card";
import {Tabs} from "./Tabs";

interface Props {

}
export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {

    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '1 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            day_info: '2 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: 'Ср',
            day_info: '3 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Чт',
            day_info: '4 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '5 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Сб',
            day_info: '6 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Вс',
            day_info: '7 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];

    const daysToJsx = days.map((day: Day) => <Card key={day.day_info} day={day}/>)

    return (
        <>
            <Tabs />
            <div className={sl.days}>
                {daysToJsx}
            </div>
        </>

    )
}
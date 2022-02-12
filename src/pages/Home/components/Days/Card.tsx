import React from "react"

import sl from './Days.module.scss'
import SharedSvgSelector from "../../../../assets/icons/shared/SharedSvgSelector";
import {Day} from "./Days";
import {dayWeather, weekWeather} from "../../../../store/types/types";
import getDate from "../../../../shared/helper/getDate";

interface Props {
    day: dayWeather;
}

export const Card = ({day}: Props) => {

    const { dt, temp, weather} = day

    const main = weather[0].main
    const [dayString , dateString] = getDate(dt)
    return (
        <div className={sl.card}>
            <div className={sl.card__day}>{dayString}</div>
            <div className={sl.card__day_info}>{dateString}</div>
            <div className={sl.card__day_img}>
                <SharedSvgSelector id={main}/>
            </div>
            <div className={sl.card__day_temp}>{Math.floor(temp.max)+'°'}</div>
            <div className={sl.card__night_temp}>{Math.floor(temp.min)+'°'}</div>
            <div className={sl.info}>{main}</div>
        </div>
    )
}
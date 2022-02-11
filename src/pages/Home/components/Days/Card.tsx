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
    console.log(dt)
    return (
        <div className={sl.card}>
            <div className={sl.card__day}>{getDate(dt)}</div>
            <div className={sl.card__day_info}>{main}</div>
            <div className={sl.card__day_img}>
                <SharedSvgSelector id={main}/>
            </div>
            <div className={sl.card__day_temp}>{}</div>
            <div className={sl.card__night_temp}>{}</div>
            <div className={sl.info}>{}</div>
        </div>
    )
}
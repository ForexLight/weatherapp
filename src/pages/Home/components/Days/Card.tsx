import React from "react"

import sl from './Days.module.scss'
import SharedSvgSelector from "../../../../assets/icons/shared/SharedSvgSelector";
import {Day} from "./Days";

interface Props {
    day: Day;
}

export const Card = ({day}: Props) => {

    const { day_info, icon_id, temp_day, temp_night, info} = day
    return (
        <div className={sl.card}>
            <div className={sl.card__day}>{day.day}</div>
            <div className={sl.card__day_info}>{day_info}</div>
            <div className={sl.card__day_img}>
                <SharedSvgSelector id={icon_id}/>
            </div>
            <div className={sl.card__day_temp}>{temp_day}</div>
            <div className={sl.card__night_temp}>{temp_night}</div>
            <div className={sl.info}>{info}</div>
        </div>
    )
}
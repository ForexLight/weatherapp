import React from "react"

import sl from './ThisDay.module.scss'
import SharedSvgSelector from "../../../../assets/icons/shared/SharedSvgSelector";
import {Weather} from "../../../../store/types/types";
import {getData} from "../../../../shared/helper/getDataNow";

interface Props {
    weather: Weather
}

export const ThisDay = ({weather}: Props) => {
    return (
        <div className={sl.current_day}>
            <div className={sl.top}>
                <div className={sl.top_info}>
                    <div className={sl.today_degrees}>{Math.floor(weather.main.temp)}°</div>
                    <div className={sl.today_info}>Сегодня</div>
                </div>
                <SharedSvgSelector id={weather.weather[0].main}/>
            </div>
            <div className={sl.bottom}>
                <div className={sl.curr_time}> Время <span>{getData.now()}</span></div>
                <div className={sl.curr_city}> {weather.name}</div>
            </div>
        </div>
    )
}
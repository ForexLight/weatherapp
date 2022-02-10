import React from "react"

import sl from './ThisDayInfo.module.scss'

import cloud from '../../../../assets/images/cloud.png'
import {ThisDayItem} from "./ThisDayItem";
import {Weather} from "../../../../store/types/types";
import getWindDirection from "../../../../shared/helper/getWindDirrection";


interface Props {
    weather: Weather
}

export interface Item {
    icon_id: string,
    name: string,
    value: string
}

export const ThisDayInfo = ({weather}: Props) => {

    const windDirection = getWindDirection(weather.wind)
    const {temp, feels_like, pressure, humidity} = weather.main

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(temp)}° - ощущается как ${Math.floor(feels_like)}°`
        },
        {
            icon_id: 'pressure',
            name: 'Давление ',
            value: `${pressure} мм ртутного столба`
        },
        {
            icon_id: 'extent',
            name: 'Влажность',
            value: `Влажность ${humidity}%`
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: windDirection
        }
    ]

    let itemsComp = items.map((item: Item, index: number) => <ThisDayItem key={item.icon_id} item={item}/>)

    return (
        <div className={sl.today_info}>
            <div className={sl.today_info__items}>
                {itemsComp}
            </div>
            <img src={cloud} alt="" className={sl.cloud_image}/>
        </div>
    )
}
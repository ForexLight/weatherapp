import React from "react"

import sl from './ThisDayInfo.module.scss'

import cloud from '../../../../assets/images/cloud.png'
import {ThisDayItem} from "./ThisDayItem";

interface Props {

}

export interface Item {
    icon_id: string,
    name: string,
    value: string
}

export const ThisDayInfo = (props: Props) => {

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°'
        },
        {
            icon_id: 'pressure',
            name: 'Давление ',
            value: '765 мм ртутного столба - нормальное'
        },
        {
            icon_id: 'extent',
            name: 'Осадки',
            value: 'Без осадков'
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
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
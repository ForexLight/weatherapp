import React from "react"

import sl from './PopUp.module.scss'
import {ThisDayItem} from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import {Item} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import SharedSvgSelector from "../../assets/icons/shared/SharedSvgSelector";

interface Props {

}

export const PopUp = (props: Props) => {
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
    let itemsComp = items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item}/>)

    return (
        <>
            <div className={sl.blur} />
            <div className={sl.popup}>
                <div className={sl.day}>
                    <div className={sl.day_temp}>20°</div>
                    <div className={sl.day_name}>Среда</div>
                    <div className={sl.day_img}>
                        <SharedSvgSelector id='rain' />
                    </div>
                    <div className={sl.day_time}>Время <span>20:21</span></div>
                    <div className={sl.day_city}>Киев</div>
                </div>
                <div className={sl.today_info}>
                    <div className={sl.today_info__items}>
                        {itemsComp}
                    </div>
                </div>
                <div className={sl.close}>
                    <SharedSvgSelector id='close' />
                </div>
            </div>
        </>


    )
}
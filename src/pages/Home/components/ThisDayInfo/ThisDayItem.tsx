import React from "react"
import {Item} from "./ThisDayInfo";
import sl from './ThisDayInfo.module.scss'
import SharedSvgSelector from "../../../../assets/icons/shared/SharedSvgSelector";


interface Props {
    item: Item
}

export const ThisDayItem = ({item}: Props) => {
    const {icon_id, name, value} = item
    return (
        <div className={sl.item}>
            <div className={sl.identification}>
                <SharedSvgSelector id={icon_id}/>
            </div>
            <div className={sl.identification_name}>{name}</div>
            <div className={sl.identification_value}>{value}</div>
        </div>
    )
}
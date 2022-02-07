import React from "react"

import sl from './ThisDay.module.scss'
import SharedSvgSelector from "../../../../assets/icons/shared/SharedSvgSelector";

interface Props {

}

export const ThisDay = (props: Props) => {
    return (
        <div className={sl.current_day}>
            <div className={sl.top}>
                <div className={sl.top_info}>
                    <div className={sl.today_degrees}>20°</div>
                    <div className={sl.today_info}>Сегодня</div>
                </div>
                <SharedSvgSelector id='sun'/>
            </div>
            <div className={sl.bottom}>
                <div className={sl.curr_time}> Время <span>20:21</span></div>
                <div className={sl.curr_city}>Киев</div>
            </div>
        </div>
    )
}
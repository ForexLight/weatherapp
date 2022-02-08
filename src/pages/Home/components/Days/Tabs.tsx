import React from "react"

import sl from './Days.module.scss'


interface Props {

}
interface Tab {
    value: string
}

export const Tabs = (props: Props) => {

    const tabs = [
        {
            value: 'На неделю'
        },
        {
            value: 'На 10 дней'
        },
        {
            value: 'На месяц'
        }
    ]

    const tabsToJsx = tabs.map((tab:Tab) => {
        return (
            <div className={sl.tab } key={tab.value}>
                {tab.value}
            </div>
        )
    })
    return (
        <div className={sl.tabs}>
            <div className={sl.tabs__wrapper}>
                {tabsToJsx}
            </div>
            <div className={sl.cancel}>Отменить</div>
        </div>
    )
}
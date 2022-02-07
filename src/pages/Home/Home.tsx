import React from "react"

import sl from './Home.module.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div className={sl.home}>
            <div className={sl.wrapper}>
                <ThisDay />
                <ThisDayInfo />
            </div>
        </div>
    )
}
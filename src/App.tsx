import React, {useState} from 'react';

import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {MonthStatistic} from "./pages/MonthStatistic/MonthStatistic";
import Header from "./shared/Header/Header";
import {PopUp} from "./shared/PopUp/PopUp";



function App() {
    const[popup, setPopup] = useState(false);
    const[city, setCity] = useState('Kiev')

    const popupVisible = () => {
        setPopup(!popup)
    }
    const changeCity = (city:string) => {
        setCity(city)
    }

    return (
      <div className='global-container'>
          {/*<PopUp />*/}
          <div className="container">

              <Header city={city} changeCity={changeCity}/>
              <Routes>
                  <Route path='/' element={<Home city={city} setPopup={popupVisible}/>}/>
                  <Route path='/month-statistic' element={<MonthStatistic />}/>
              </Routes>
          </div>
      </div>

  );
}

export default App;

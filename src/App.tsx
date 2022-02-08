import React from 'react';

import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {MonthStatistic} from "./pages/MonthStatistic/MonthStatistic";
import Header from "./shared/Header/Header";
import {PopUp} from "./shared/PopUp/PopUp";



function App() {
  return (
      <div className='global-container'>
          {/*<PopUp />*/}
          <div className="container">

              <Header />
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/month-statistic' element={<MonthStatistic />}/>
              </Routes>
          </div>
      </div>

  );
}

export default App;

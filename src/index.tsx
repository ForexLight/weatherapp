import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import './styles/index.scss'
import App from './App';
import {ThemeProvider} from "./provider/ThemeProvider";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


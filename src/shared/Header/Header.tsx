import React, {useState} from 'react';
import sl from './Header.module.scss'
import SharedSvgSelector from "../../assets/icons/shared/SharedSvgSelector";
import {useTheme} from '../../hooks/useTheme'
import {Theme} from "../../context/ThemeContext";


interface Props {
    city: string,
    changeCity: (city:string) => void
}

const Header = (props: Props) => {

    const theme = useTheme()
    const [thisCity, setThisCity] = useState('Kiev')
    const {city, changeCity} = props


    const changeTheme = () => {
        console.log(theme)
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setThisCity(e.target.value)
    }
    function clickHandler() {
        changeCity(thisCity)
    }

    console.log(city)


  return(
      <header className={sl.header}>
        <div className={sl.wrapper}>
          <div className={sl.logo}>
            <SharedSvgSelector id='header-logo' />
          </div>
          <div className={sl.title}>
            React weather
          </div>
        </div>
        <div className={sl.wrapper}>
            <div
                className={sl.change_theme}
                onClick={changeTheme}
            >
                <SharedSvgSelector id='change_theme' />
            </div>
            <div className={sl.wrapper}>
                <input type="text" onChange={handleChange} value={thisCity}/>
                <button onClick={clickHandler}>Search</button>
            </div>


        </div>
      </header>
  );
};

export default Header;

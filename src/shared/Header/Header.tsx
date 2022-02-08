import React from 'react';
import sl from './Header.module.scss'
import SharedSvgSelector from "../../assets/icons/shared/SharedSvgSelector";
import Select from 'react-select/'
import {useTheme} from '../../hooks/useTheme'
import {Theme} from "../../context/ThemeContext";


interface Props {}

const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Киев' },
        { value: 'city-2', label: 'Винница' },
        { value: 'city-3', label: 'Одесса' }
    ]

    const theme = useTheme()



    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: (theme.theme === Theme.DARK) ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
            width: '200px',
            height: '40px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: (theme.theme === Theme.DARK) ? '#fff' : '#000',

        })
    }



    const changeTheme = () => {
        console.log(theme)
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }



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
            <Select defaultValue={options[0]} options={options} styles={colorStyles}/>

        </div>
      </header>
  );
};

export default Header;

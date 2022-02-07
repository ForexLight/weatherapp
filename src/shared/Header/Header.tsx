import React, { FunctionComponent } from 'react';
import sl from './Header.module.scss'
import SharedSvgSelector from "../../assets/icons/shared/SharedSvgSelector";
import Select from 'react-select/'


interface Props {}

const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Киев' },
        { value: 'city-2', label: 'Винница' },
        { value: 'city-3', label: 'Одесса' }
    ]

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71,147,255,0.2)',
            width: '200px',
            height: '40px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        })
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
            <div className={sl.change_theme}>
                <SharedSvgSelector id='change_theme' />
            </div>
            <Select defaultValue={options[0]} options={options} styles={colorStyles}/>

        </div>
      </header>
  );
};

export default Header;

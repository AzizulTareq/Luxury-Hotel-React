import React from 'react'
import './Header.css'
import logo from './logo.PNG'
const Header = () => {
    return (
        <div className='header'>
            <img
            className='header__icon'
            src={logo} />
        </div>
    )
}

export default Header

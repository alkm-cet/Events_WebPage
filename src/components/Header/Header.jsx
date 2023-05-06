import React from 'react';
import './Header.css';
//IMAGE
import logo from '../../Images/logo.png'
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <h1>Etkinlikler</h1>
            <Navbar />
        </div>
    )
}

export default Header
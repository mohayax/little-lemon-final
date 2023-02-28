import React from 'react';
import header from '../../src/Assets/header.jpg';
import './Header.css'
import {
    Link
} from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className='header'>
            <div className="col-one">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <div className='header-info'>
                      We are a family owned
                      Mediterrean restaurant,
                      focused on traditional
                      recipes served with a modern
                      twist.
                </div>
                <Link className='reserve-table' to={'/reservation'}>Reserve a Table</Link>
            </div>
            <div className="col-two">
                <div className="header-img">
                    <img src={header} alt="header-img"/>
                </div>
            </div>
        </div>
    </header>
   
  )
}

export default Header
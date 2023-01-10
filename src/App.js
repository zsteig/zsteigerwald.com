import './index.css';

import React, { useState, useRef, useEffect } from 'react';

import MotorsportBG from './assets/MotorsportBG.jpg';
import StreetBG from './assets/StreetBG.jpg';
import SportsBG from './assets/SportsBG.jpg';
import PortraitBG from './assets/PortraitBG.jpg';
import WildlifeBG from './assets/WildlifeBG.jpg';
import AboutBG from './assets/AboutBG.jpg';

const logo = require('./assets/Logo.png');

function App() {

  return (
    <>
    <Navbar>
      <img src={logo} alt=""></img>
      <NavItem icon="≣">
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    </>
  );
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  const handleClickOutside = () => {
    setOpen(false);
  }

  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    });

    return ref;
  }
  
  const ref = useOutsideClick(handleClickOutside);

  const handleClick = () => {
    setOpen((state) => !state);
  };

  return (
    <li className='nav-item'>
      <a ref={ref} href='/#' className='icon-button' onClick={handleClick}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {

  return (
    <div className="roll">
      <div className="film-frames">
          <div className='frame'>
            <a href='/#' className='menu-item' style={{ backgroundImage: "url(" + MotorsportBG + ")" }}> </a>
            <a href='/#' className='menu-item-text'>Motorsport</a>
          </div>
          <div className='frame'>
            <a href='/#' className='menu-item' style={{ backgroundImage: "url(" + StreetBG + ")" }}> </a>
            <a href='/#' className='menu-item-text'>Street</a>
          </div>
          <div className='frame'>
            <a href='/#' className='menu-item' style={{ backgroundImage: "url(" + SportsBG + ")" }}> </a>
            <a href='/#' className='menu-item-text'>Sports</a>
          </div>
          <div className='frame'>
            <a href='/#' className='menu-item' style={{ backgroundImage: "url(" + PortraitBG + ")" }}> </a>
            <a href='/#' className='menu-item-text'>Portrait</a>
          </div>
          <div className='frame'>
            <a href='/#' className='menu-item' style={{ backgroundImage: "url(" + WildlifeBG + ")" }}> </a>
            <a href='/#' className='menu-item-text'>Wildlife</a>
          </div>
          <div className='frame-blank'></div>
          <div className='frame'>
            <a href='/#' className='menu-item' style={{ backgroundImage: "url(" + AboutBG + ")" }}> </a>
            <a href='/#' className='menu-item-text'>About</a>
          </div>
      </div>
      <div className="left-sprocket">
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
      </div>
      <div className="tab"></div>
      <div className="right-sprocket">
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
          <div className="notch"></div>
      </div>
    </div>
  );
}

export default App;

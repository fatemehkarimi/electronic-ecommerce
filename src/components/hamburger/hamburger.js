import React, { useState, useEffect } from 'react';
import menuIcon from './../../icons/menu.png';
import closeIcon from './../../icons/cross.png';
import './hamburger.css';

function MenuOption({ option }) {
  return (
    <li className='hamburger-option'>
      <a href={ option.path } >
        { option.name }
      </a>
    </li>
  );
}

function Menu({ options }) {
  return (
    <div className='hamburger-extended'>
      <ul>
        { options.map((op) => <MenuOption option={ op } />) }
      </ul>
    </div>
  );
}

function Hamburger(props) {
    return (
      <div className='hamburger' >
        <div>
          {
            props.isOpen
            ? <img className='hamburger-icon' src={ closeIcon } />
            : <img className='hamburger-icon' src={ menuIcon } />
          }
        </div>
        {
          props.isOpen
          ? <Menu options={ props.options } />
          : <></>
        }
      </div>
    );
}

export default Hamburger;
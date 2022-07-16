import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import menuIcon from './../../icons/menu.png';
import closeIcon from './../../icons/cross.png';
import './hamburger.css';

function MenuOption({ option }) {
  const navigate = useNavigate();

  return (
    <div  className='hamburger-option' onClick={ () => navigate(option.path) }>
      { option.name }
    </div>
  );
}

function Menu({ options }) {
  return (
    <div
     className='hamburger-extended'>
      { options.map((op) => <MenuOption key={ op.name } option={ op } />) }
    </div>
  );
}

function Hamburger(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
     tabIndex="0"
     className='hamburger'
     onClick={ () => setIsOpen(!isOpen) }
     onBlur={ () => setIsOpen(false) }>
      <div>
        {
          isOpen
          ? <img className='hamburger-icon' src={ closeIcon } />
          : <img className='hamburger-icon' src={ menuIcon } />
        }
      </div>
      {
        isOpen
        ? <Menu options={ props.options }/>
        : <></>
      }
    </div>
  );
}

export default Hamburger;
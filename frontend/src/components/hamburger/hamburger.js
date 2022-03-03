import React, { useState, useEffect } from 'react';
import menuIcon from './../../icons/menu.png';
import closeIcon from './../../icons/close.png';
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
                {
                    options.map((op) => <MenuOption option={ op } />)
                }
            </ul>
        </div>
    );
}

function Hamburger(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='hamburger'>
            <div onClick={ handleClick }>
                {
                    isOpen
                    ? <img className='hamburger-icon' src={ closeIcon } />
                    : <img className='hamburger-icon' src={ menuIcon } />
                }
            </div>
            {
                isOpen
                ? <Menu options={ props.options } />
                : <></>
            }
        </div>
    );
}

export default Hamburger;
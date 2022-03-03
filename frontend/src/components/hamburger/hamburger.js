import React, { useState, useEffect } from 'react';
import menuIcon from './../../icons/menu.png';
import closeIcon from './../../icons/close.png';
import './hamburger.css';

function Menu() {
    return (
        <div className='hamburger-extended'>
            <ul>
                <li>Appliances</li>
                <li>TV & Home Threater</li>
                <li>Computers & Tablets</li>
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
                ? <Menu />
                : <></>
            }
        </div>
    );
}

export default Hamburger;
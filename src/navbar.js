import React, { useEffect, useState } from "react";
import Hamburger from './components/hamburger/hamburger';
import SearchBox from "./components/searchBox/searchBox";
import API from './API';
import './navbar.css';
import logo from './icons/logo.svg';

function BottomNavBar({ menuOptions }) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const handleMenuClick =() => {
        setIsHamburgerOpen(!isHamburgerOpen);
    }

    return (
        <div className="navbar-bottom">
            <div className="navbar-hamburger-wrapper" onClick={ handleMenuClick }>
                <Hamburger options={ menuOptions } isOpen={ isHamburgerOpen } />
                <span>Menu</span>
            </div>
        </div>
    );
}

function TopNavBar() {
    return (
        <div className="navbar-top">
            <img className="app-logo" src={ logo } />
            <div className="navbar-searchbox-wrapper">
                <SearchBox />
            </div>
        </div>
    );
}

function NavBar() {
    const menuOptions = API.categories;

    menuOptions.forEach((apiOption) => {
        apiOption.path = `/category/${ apiOption.name }/${ apiOption.id }`;
    });

    return (
        <div className="navbar">
            <TopNavBar />
            <BottomNavBar menuOptions={ menuOptions } />
        </div>
    );
}

export default NavBar;

import React, { useEffect, useState } from "react";
import Hamburger from './components/hamburger/hamburger';
import SearchBox from "./components/searchBox/searchBox";
import './navbar.css';
import logo from './icons/logo.svg';

function BottomNavBar() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const handleMenuClick =() => {
        setIsHamburgerOpen(!isHamburgerOpen);
    }

    return (
        <div className="navbar-bottom">
            <div className="navbar-hamburger-wrapper" onClick={ handleMenuClick }>
                <Hamburger isOpen={ isHamburgerOpen } />
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
    return (
        <div className="navbar">
            <TopNavBar />
            <BottomNavBar />
        </div>
    );
}

export default NavBar;

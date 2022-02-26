import React from "react";
import SearchBox from "./components/searchBox/searchBox";
import './navbar.css';
import logo from './icons/logo.svg';

function NavBar() {
    return (
        <div className="navbar">
            <img className="app-logo" src={ logo } />
            <div className="navbar-searchbox-wrapper">
                <SearchBox />
            </div>
        </div>
    );
}

export default NavBar;

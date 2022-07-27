import React, { useEffect, useState } from "react";
import Hamburger from '../hamburger/hamburger';
import SearchBox from "../searchBox/searchBox";
import API from '../../API';
import './navbar.css';
import logo from '../../icons/logo.svg';

function BottomNavBar({ menuOptions }) {
  return (
    <div className="navbar-bottom">
      <div className="navbar-hamburger-wrapper">
        <Hamburger options={ menuOptions } />
        <span>Menu</span>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="navbar-top">
      <a className="navbar-top-logo-link" href="/">
        <img className="app-logo" src={ logo } />
      </a>
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

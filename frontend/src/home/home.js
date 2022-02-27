import React from "react";
import NavBar from "../navbar";
import Banner from "./banner";
import './home.css';
import './../globalStyle.css';

function Home() {
    return (
        <div className="home-wrapper">
            <div className="navbar-wrapper">
                <NavBar />
            </div>
            <div className="content-wrapper">
                <div className="banner-wrapper">
                    <Banner />
                </div>
            </div>
        </div>
    );
}

export default Home;

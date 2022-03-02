import React from "react";
import NavBar from "../navbar";
import Banner from "../components/banner/banner";
import './home.css';
import './../globalStyle.css';
import poster1 from '../images/poster1.jpg';
import poster2 from '../images/poster2.jpg';
import poster3 from '../images/poster3.jpg';
import poster4 from '../images/poster4.jpg';
import poster5 from '../images/poster5.jpg';


function Home() {
    const bannerImages = [poster1, poster2, poster3, poster4, poster5];

    return (
        <div className="home-wrapper">
            <div className="navbar-wrapper">
                <NavBar />
            </div>
            <div className="content-wrapper">
                <div className="banner-wrapper">
                    <Banner images={ bannerImages } interval={ 3500 } />
                </div>
            </div>
        </div>
    );
}

export default Home;

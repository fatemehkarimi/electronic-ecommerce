import React from "react";
import { useMostViewedFetch } from "../hooks/useMostViewedFetch";
import { useTrendingFetch } from '../hooks/useTrendingFetch';

import NavBar from "../navbar";
import Banner from "../components/banner/banner";
import ProductCarousel from "../productCarousel";

import './home.css';
import './../globalStyle.css';

import poster1 from '../images/poster1.jpg';
import poster2 from '../images/poster2.jpg';
import poster3 from '../images/poster3.jpg';
import poster4 from '../images/poster4.jpg';
import poster5 from '../images/poster5.jpg';


function TrendingProducts() {
  const { products, loading, error } = useTrendingFetch();

  return (
    <>
    {
      products && products.length > 0 ?
        <div className='home-product-carousel-wrapper'>
          <h2>Trending products</h2>
          <ProductCarousel products= { products } />
        </div>
      : undefined
    }
    </>
  );
}


function MostViewedProducts() {
  const { products, error, loading } = useMostViewedFetch();
  if(error) return <></>;

  return (
    <>
    {
      products && products.length > 0 ?
        <div className="home-product-carousel-wrapper">
          <h2>Most Viewed by People</h2>
          <div>
            <ProductCarousel products={ products } />
          </div>
        </div>
      : undefined
    }
    </>
  );
}


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
        <div className="home-product-recomm-wrapper">
          <TrendingProducts />
        </div>
        <div className="home-product-recomm-wrapper">
          <MostViewedProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;

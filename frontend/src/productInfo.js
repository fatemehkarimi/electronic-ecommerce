import React from 'react';
import Review from './review';
import ProductFeature from './productFeature';
import './productInfo.css';

function Banner(props) {
    return (<div className='product-info-banner'>
        <h1>{ props.name }</h1>
    </div>);
}

function ProductPrice(props) {
    return (<div className='product-info-price'>
       <span>Price: </span>
       <span className='product-info-price-value'>${ props.price }</span>
    </div>)
}

function ProductDescription(props) {
    return (<div className='product-info-description'>
        <p>{ props.description }</p>
    </div>);
}

function ProductInfo(props) {
    const getFeatures = () => {
        var features = {};
        features['Model number'] = props.info.modelNumber;
        features['Brand'] = props.info.manufacturer;
        features['Color'] = props.info.color;
        features['Depth'] = props.info.depth;
        features['Height'] = props.info.height;
        features['Weight'] = props.info.weight;
        features['Width'] = props.info.width;
        features['Display'] = props.info.displayType;
        features['Operating system'] = props.info.mobileOperatingSystem;
        features['Service provider'] = props.info.serviceProvider;
        features['Included components'] = [];

        for(var i in props.info.includedItemList)
            features['Included components']
            .push(props.info.includedItemList[i].includedItem);
        return features;
    }

    return (<div className='product-info'>
        <Banner name={ props.info.name } />
        <div className='product-info-user-review-wrapper'>
            <Review value={ props.info.customerReviewAverage } />
        </div>
        <hr />
        <ProductPrice price={ props.info.regularPrice  } />
        <ProductDescription description={ props.info.longDescription } />
        <ProductFeature features={ getFeatures() } />
    </div>);
}

export default ProductInfo;
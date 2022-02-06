import React from 'react';
import Review from './review';
import ProductFeature from './productFeature';
import ProductVariant from './productVariant';
import { _PRODUCT_IDENTITY_KEY_ } from "./apiConstants";
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
        features['Energy consumption Kwh per year'] = props.info.energyConsumptionKwhPerYear;
        features['TV type'] = props.info.tvType;
        features['Included components'] = [];

        for(var i in props.info.includedItemList)
            features['Included components']
            .push(props.info.includedItemList[i].includedItem);
        return features;
    }

    const getVariations = () => {
        if(props.info.productVariations.length == 0)
            return undefined;
        
        var variants = [];
        props.info.productVariations.forEach(variant => {
            const extractVariant = (item) => {
                var feature = item.name.split(':')[1];
                var value = item.value;
                return [feature, value];
            }

            var result = {};
            result[_PRODUCT_IDENTITY_KEY_] = variant[_PRODUCT_IDENTITY_KEY_];
            
            for(let i = 0; i < variant.variations.length; ++i) {
                var [feature, value] = extractVariant(variant.variations[i]); 
                result[feature] = value;
            }
            variants.push(result);
        });
        return variants;
    }

    const handleProductVariantChange = (productKey) => {
        props.onProductVariantChange(productKey);
    }

    return (<div className='product-info'>
        <Banner name={ props.info.name } />
        <div className='product-info-user-review-wrapper'>
            <Review
             value={ props.info.customerReviewAverage }
             countReview={ props.info.customerReviewCount } />
        </div>
        <hr />
        <ProductPrice price={ props.info.regularPrice  } />
        <ProductVariant
         current={ props.info.sku }
         variants={ getVariations() }
         onProductVariantChange={ handleProductVariantChange } />
        <ProductFeature features={ getFeatures() } />
        <ProductDescription description={ props.info.longDescription } />
    </div>);
}

export default ProductInfo;
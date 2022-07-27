import React from 'react';
import Review from './components/review/review';
import ProductFeature from './productFeature';
import ProductVariant from './productVariant';
import PConst from "./appConstants";
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
        features['Model number'] = props.info[PConst.PRODCUT_MODEL_NUMBER];
        features['Brand'] = props.info[PConst.PRODUCT_MANUFACTURER];
        features['Color'] = props.info[PConst.PRODUCT_COLOR];
        features['Depth'] = props.info[PConst.PRODUCT_DEPTH];
        features['Height'] = props.info[PConst.PRODUCT_HEIGHT];
        features['Weight'] = props.info[PConst.PRODCUT_WEIGHT];
        features['Width'] = props.info[PConst.PRODUCT_WIDTH];
        features['Display'] = props.info[PConst.PRODUCT_DISPLAY_TYPE];
        features['Operating system'] = props.info[PConst.PRODUCT_OPERATING_SYSTEM];
        features['Service provider'] = props.info[PConst.PRODUCT_SERVICE_PROVIDER];
        features['Energy consumption Kwh per year'] = props.info.energyConsumptionKwhPerYear;
        features['TV type'] = props.info.tvType;
        features['Included components'] = [];

        for(var i in props.info[PConst.PRODUCT_INCLUDED_ITEM_LIST])
            features['Included components']
            .push(props.info[PConst.PRODUCT_INCLUDED_ITEM_LIST][i].includedItem);
        return features;
    }

    const getVariations = () => {
        if(props.info[PConst.PRODUCT_VARIATIONS].length == 0)
            return undefined;
        
        var variants = [];
        props.info[PConst.PRODUCT_VARIATIONS].forEach(variant => {
            const extractVariant = (item) => {
                var feature = item.name.split(':')[1];
                var value = item.value;
                return [feature, value];
            }

            var result = {};
            result[PConst.PRODUCT_IDENTITY_KEY] = variant[PConst.PRODUCT_IDENTITY_KEY];
            
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
             value={ props.info[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE] }
             countReview={ props.info[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT] } />
        </div>
        <hr />
        <ProductPrice price={ props.info[PConst.PRODUCT_REGULAR_PRICE]  } />
        <ProductVariant
         current={ props.info[PConst.PRODUCT_IDENTITY_KEY] }
         variants={ getVariations() }
         onProductVariantChange={ handleProductVariantChange } />
        <ProductFeature features={ getFeatures() } />
        <ProductDescription description={ props.info[PConst.PRODUCT_LONG_DESCRIPTION] } />
    </div>);
}

export default ProductInfo;
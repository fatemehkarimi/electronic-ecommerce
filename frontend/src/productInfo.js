import React from 'react';
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
    return (<div className='product-info'>
        <Banner name={ props.info.name } />
        {/* <Review value={ props.info.customerReviewAverage } /> */}
        <hr />
        <ProductPrice price={ props.info.regularPrice  } />
        <ProductDescription description={ props.info.longDescription } />
    </div>);
}

export default ProductInfo;
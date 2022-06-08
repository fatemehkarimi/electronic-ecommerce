import React from 'react';
import ProductWarranty from './productWarranty';
import PConst from './productConstants';
import './buyBox.css';

function Price({price}) {
    return(
    <div className='buy-box-product-price'>
        <span className='price-symbol'>$</span>
        <span>{ price }</span>
    </div>
    );
}

function Delivary({ isFree, cost }) {
    return (
    <div>
        {
            isFree
            ? 'FREE delivary'
            : <span>
                <span className='price-symbol'>$</span>
                <span>{ `${cost} delivary` }</span>
             </span>
        }
    </div>
    );
}

function Availability({ available }) {
    return (
        <div className='buy-box-availability'>
            <span className={ available ? 'buy-box-in-stock' : 'buy-box-out-of-stock' }>
                { available ? 'In Stock.' : 'Out of Stock.' }
            </span>
        </div>
    );
}

function BuyBox({ productKey, shipping, price, availability }) {
    return (<div className='buy-box'>
        <Price price={ price } />
        <Delivary
         isFree={ shipping[PConst.PRODUCT_FREE_SHIPPING] }
         cost={ shipping[PConst.PRODUCT_SHIPPING_COST] } />
        <Availability available={ availability } />
        <ProductWarranty productKey={ productKey }/>
        <a className='add-to-cart' href='#'>Add to Cart</a>
    </div>);
}

export default BuyBox;
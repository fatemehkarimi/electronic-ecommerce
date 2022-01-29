import React, { useState } from 'react';
import './productAlbum.css';

function Overview(props) {
    return (<div className='product-album-overview'>
        {props.images.map((image) => {
            return (<div className="product-album-overview-frame"> 
            <img
                className='product-album-overview-img'
                src={ image.href }
                alt={ image.rel }
                onClick={ () => props.onClick(image.href) } />
            </div>);
        })}
    </div>);
}

function ProductImg(props) {
    return (<div className='product-album-product-img'>
        <img alt={ props.alt } src={ props.src }></img>
    </div>);
}

function ProductAlbum(props) {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleSelectedImage = (imageLink) => {
        for(let i = 0; i < props.images.length; ++i)
            if(imageLink == props.images[i].href) {
                setSelectedImage(i);
                break;
            }
    }

    return (<div className={ `product-album ${ props.className }` }>
        <Overview
            className={ `${ props.className }` }
            images={ props.images }
            onClick={ handleSelectedImage } />
        <ProductImg
            alt={ props.images[selectedImage].rel }
            src={ props.images[selectedImage].href } />
    </div>);
}

export default ProductAlbum;
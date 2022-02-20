import React, { useState } from 'react';
import PConst from './productConstants';
import './productAlbum.css';

function Overview(props) {
    const [selectedImage, setSelectedImage] = useState(props.default);
    const handlSelect = (image) => {
        setSelectedImage(image);
        props.onClick(image[PConst.IMAGE_HREF]);
    }

    return (<div className='product-album-overview-wrapper' >
        <div className='product-album-overview'>
            {props.images.map((image) => {
                if(Number(image[PConst.IMAGE_WIDTH]) < Number(props.minWidth)
                   || Number(image[PConst.IMAGE_HEIGHT]) < Number(props.minHeight))
                    return;

                return (
                <div key={ image.rel }
                 className={ `product-album-overview-frame
                            ${ image == selectedImage
                                ? 'product-album-selected' : ''}` }> 
                    <img
                        className='product-album-overview-img'
                        src={ `${ image[PConst.IMAGE_HREF] };maxHeight=67;maxWidth=58` }
                        alt={ image[PConst.IMAGE_REL] }
                        onClick={ () => handlSelect(image) } />
                </div>);
            })}
        </div>
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
            if(imageLink == props.images[i][PConst.IMAGE_HREF]) {
                setSelectedImage(i);
                break;
            }
    }

    return (<div className={ `product-album ` }>
        <Overview
            className={ `${ props.className }` }
            images={ props.images }
            onClick={ handleSelectedImage }
            minWidth={ props.minWidth }
            minHeight={ props.minHeight }
            default={ props.images[selectedImage] } />
        <ProductImg
            alt={ props.images[selectedImage][PConst.IMAGE_REL] }
            src={ props.images[selectedImage][PConst.IMAGE_HREF] } />
    </div>);
}

export default ProductAlbum;
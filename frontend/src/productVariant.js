import React, { useState, useEffect } from 'react';
import DropDown from './dropdown';
import { capitalize } from './utils';
import { _PRODUCT_IDENTITY_KEY_ } from "./apiConstants";
import "./productVariant.css";


function DropDownWithTitle(props) {
    const handleSelect = (option) => {
        props.onSelect(props.header, option);
    }

    return(<div className='product-variant-dropdown-with-title'>
        <span className='product-variant-dropdown-with-title-header'>
            { capitalize(props.header.replace('_', ' ')) }
        </span>
        <DropDown
         options={ props.options }
         default={ props.default }
         onSelect={ handleSelect }
        />
    </div>);
}


function ProductVariant(props) {
    const [selectedVariant, setSelectedVariant] = useState(props.current);

    const getHeaders = () => {
        if(props.variants == null)
            return [];

        var result = [];
        props.variants.forEach((item) => {
            Object.keys(item).forEach((key) => {
                if(key == _PRODUCT_IDENTITY_KEY_)
                    return;

                if(!result.includes(key))
                    result.push(key);
            })
        })
        return result;
    }

    const getHeaderOptions = (header) => {
        var result = [];
        props.variants.forEach((item) => {
            if(!result.includes(item[header]))
                result.push(item[header]);
        })
        return result;
    }

    const getSelectedOption = (header) => {
        for(var i in props.variants)
            if(props.variants[i][_PRODUCT_IDENTITY_KEY_] == selectedVariant)
                return props.variants[i][header];
    }

    const getSelectedVariantObject = () => {
        for(var i in props.variants) {
            if(props.variants[i][_PRODUCT_IDENTITY_KEY_] == selectedVariant)
                return Object.assign({}, props.variants[i]);
        }
    }

    const getProductIdentity = (variantConfig) => {
        for(var i in props.variants) {
            var keys = Object.keys(variantConfig);
            var found = true;

            for(var j in keys) {
                if(props.variants[i][keys[j]] != variantConfig[keys[j]]) {
                    found = false;
                    break;
                }
            }

            if(found)
                return props.variants[i][_PRODUCT_IDENTITY_KEY_];
        }
    }

    const handleSelect = (header, option) => {
        var selected = getSelectedVariantObject();
        selected[header] = option;
        delete selected[_PRODUCT_IDENTITY_KEY_];

        var newSelectedVariant = getProductIdentity(selected);
        if(newSelectedVariant != null)
            setSelectedVariant(newSelectedVariant);
        else // TODO: object must be found
            console.log("Object not found. fix it");
    }

    useEffect(() => {
        props.onProductVariantChange(selectedVariant);
    }, [selectedVariant]);

    return(<div className="product-variant">
        {
            getHeaders().map((header) => {
                return(<DropDownWithTitle
                        header={ header }
                        options={ getHeaderOptions(header) }
                        default={ getSelectedOption(header) }
                        onSelect={ handleSelect } />);
            })
        }
    </div>);
}

export default ProductVariant;
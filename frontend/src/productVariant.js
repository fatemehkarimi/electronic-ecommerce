import React, { useState } from 'react';
import { capitalize } from './utils';
import { _PRODUCT_IDENTITY_KEY_ } from "./apiConstants";
import "./productVariant.css";
import arrowDownIcon from './icons/arrow-down.png';

function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.options[props.default]);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectedOption = (option) => {
        for(var i = 0; i < props.options.length; ++i)
            if(props.options[i] == option) {
                setSelectedValue(option);
                break;
            }
    }

    return (<div className="product-variant-dropdown-wrapper">
        <span className="product-variant-header">{props.header}</span>
        <div tabindex="0" className="product-variant-dropdown"
            onClick={ handleDropdownClick } onBlur={ (e) => setIsOpen(false) } >
            <div>
                <span>{ selectedValue }</span>
            </div>
            {isOpen &&
            <div className='product-variant-dropdown-option-wrapper'>
                { props.options.map((option) => {
                    return(<div onClick={ (e) => handleSelectedOption(option) }
                            className="product-variant-dropdown-option">
                        <span>{ option }</span>
                    </div>);
                })}
            </div>}
            <button className='product-variant-dropdown-open-button' >
                <img src={ arrowDownIcon } />
            </button>
        </div>
    </div>);
}

function ProductVariant(props) {
    const getHeaders = () => {
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

    return(<div className="product-variant">
        {
            getHeaders().map((header) => {
                return(<DropDown
                        header={ capitalize(header.replace('_', ' ')) }
                        options={ getHeaderOptions(header) }
                        default={ 0 } />);
            })
        }
    </div>);
}

export default ProductVariant;
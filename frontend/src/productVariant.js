import { _PRODUCT_IDENTITY_KEY_ } from "./apiConstants";
import "./productVariant.css";

function DropDown(props) {
    return (<div className="product-variant-dropdown-wrapper">
        <span className="product-variant-header">{props.header}</span>
        <select className="product-variant-dropdown">
            {props.options.map((option) => {
                console.log(option)
                return(<option value={ option }>{ option }</option>);
            })}
        </select>
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
                return(<DropDown header={ header } options={ getHeaderOptions(header) } />);
            })
        }
    </div>);
}

export default ProductVariant;
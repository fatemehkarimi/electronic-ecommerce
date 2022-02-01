import React, { useState, useEffect } from 'react';
import './productFeature.css';

function ProductFeature(props) {
    const [expanded, setExpanded] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    }

    Object.keys(props.features).forEach(key => {
        if(props.features[key] == undefined)
            delete props.features[key];
    });
    return (<div className='product-feature'>
        <table>
            { Object.keys(props.features).slice(0, expanded ? props.features.length : 6).map((title) => {
                if(!props.features[title])
                    return;
                return(<tr>
                    <td className='product-feature-title'>{ title } </td>
                    <td>
                        { Array.isArray(props.features[title]) ?
                          props.features[title].join(", ")
                          : props.features[title] }</td>
                </tr>);
            })}
        </table>
        <span>
            <a href="#" onClick={ handleClick }>{ expanded ? "See less" : "See more" }</a>
        </span>
    </div>);
}

export default ProductFeature;
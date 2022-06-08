import React, { useState } from 'react';
import './dropdown.css';
import arrowDownIcon from './../../icons/arrow-down.png';


function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.default);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectedOption = (option) => {
        props.onSelect(option);
        setSelectedValue(option);
    }

    return (<div className="dropdown-wrapper">
        <div tabIndex="0"
            className={ `${isOpen ? 'dropdown-hidden' : 'dropdown'}` }
            onClick={ handleDropdownClick } onBlur={ (e) => setIsOpen(false) } >
            <div>
                <span>{ selectedValue }</span>
            </div>
            {isOpen &&
            <div className='dropdown-option-wrapper'>
                { props.options.map((option) => {
                    return(<div key={ option }
                        onClick={ (e) => handleSelectedOption(option) }
                            className="dropdown-option">
                        <span>{ option }</span>
                    </div>);
                })}
            </div>}
            <button className='dropdown-open-button' >
                <img src={ arrowDownIcon } />
            </button>
        </div>
    </div>);
}

export default DropDown;
import React from 'react';
import './searchBox.css';
import searchIcon from './../../icons/search.svg';

function SearchBox() {
    return (
        <div className='search-box'>
            <form className='search-box-form'>
                <input className='search-input'></input>
                <button className='search-box-button' type='submit'>
                    <img src={ searchIcon } alt='search' />
                </button>
            </form>
        </div>
    );
}

export default SearchBox;
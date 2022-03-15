import React from 'react';
import './grid.css';

function Grid({ children }) {
    return (
        <div className='grid'>
            { children }
        </div>
    );
}

export default Grid;
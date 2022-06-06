import React from 'react';
import './grid.css';

function Grid({ children, className }) {
    return (
        <div className={ `grid ${ className }` }>
            { children }
        </div>
    );
}

export default Grid;
import React, { useState } from 'react';
import Spinner from '../spinner/spinner';
import noImage from '../../icons/no-image.png';
import "./card.css";


function Card(props) {
  const [imgSrc, setImgSrc] = useState(props.image);
  const [loadComplete, setLoadComplete] = useState(false);

  const handleError = (e) => {
      setLoadComplete(true);
      setImgSrc(noImage);
  }

  return (
      <div className="card">
          <div className="card-image">
            <img
              src={ imgSrc }
              style={ { display: loadComplete ? 'block' : 'none' } }
              alt="image"
              onError={ handleError }
              onLoad={ () => { setLoadComplete(true); } }
            />
            { !loadComplete && <Spinner /> }
          </div>
          <div className="card-container">
              { props.children }
          </div>
      </div>
  );
}

export default Card;
import React from 'react';

const Carouselitem = (props) => {
  return (
    <li className="carousel__item">
      <a className='carousel__item__link'>
        <img className='carousel__item__img' src={props.imgsrc} alt=""></img>
      </a>
    </li>
  );
};

export default Carouselitem;

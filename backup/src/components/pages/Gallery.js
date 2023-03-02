import React from 'react';
import Carouselitem from '../Carouselitem';
import '../Gallery.css'

const Gallery = () => {

  return (
    <div className="gallery">
      <div className='gallery__container'>
        <div className='carouseles'>
          <div className='carousel__container'>
            <h1>Music</h1>
            <ul className='carousel__items'>
              <Carouselitem
                imgsrc="images/img-9.jpg"
              />
              <Carouselitem
                imgsrc="images/darkcyan.jpg"
              />
            </ul>
          </div>
          <div className='carousel__container'>
            <h1>Music</h1>
            <ul className='carousel__items'>
              <Carouselitem
                imgsrc="images/img-9.jpg"
              />
              <Carouselitem
                imgsrc="images/darkcyan.jpg"
              />
            </ul>
          </div>
          <div className='carousel__container'>
            <h1>Music</h1>
            <ul className='carousel__items'>
              <Carouselitem
                imgsrc="images/img-9.jpg"
              />
              <Carouselitem
                imgsrc="images/darkcyan.jpg"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
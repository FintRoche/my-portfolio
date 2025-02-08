import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import "./styles/carousel.css";

const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  pageDots: true,
};

const Carousel = ({ images }) => {
  return (
      <Flickity className={'carousel'} elementType={'div'} options={flickityOptions} disableImagesLoaded={false} reloadOnUpdate static>
        {images.map((image, index) => (
          <div className="carousel-cell" key={index} style={{ height: '100%', width: 'auto' }}>
            <img src={image} alt={`carousel-${index}`} style={{ height: '100%', width: 'auto', objectFit: 'cover' }} />
          </div>
        ))}
      </Flickity>
  );
};

export default Carousel;
